'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause } from '@phosphor-icons/react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MediaGridSectionProps {
  /** Main heading text */
  title: string;
  /** Optional subheading / description below the title */
  description?: string;
  /** Primary outline CTA button */
  primaryCta?: {
    label: string;
    href: string;
  };
  /** Secondary text-link CTA with arrow */
  secondaryCta?: {
    label: string;
    href: string;
  };
  /**
   * Exactly three images for the asymmetric grid:
   *   [0] top-left   — always visible
   *   [1] top-right  — always visible
   *   [2] bottom-left — visible on desktop only (hidden on mobile)
   */
  images: [
    { src: string; alt: string },
    { src: string; alt: string },
    { src: string; alt: string },
  ];
  /** Video sources. webmSrc is optional; mp4Src is required. */
  video: {
    mp4Src: string;
    webmSrc?: string;
    poster?: string;
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MediaGridSection({
  title,
  description,
  primaryCta,
  secondaryCta,
  images,
  video,
}: MediaGridSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const [inView,     setInView]     = useState(false);
  const [hasLoaded,  setHasLoaded]  = useState(false);
  const [isPlaying,  setIsPlaying]  = useState(false);

  // ── Intersection Observer: detect when section enters viewport ────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setInView(entry.isIntersecting); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Mark as loaded the first time it enters view (enables source injection) ─
  useEffect(() => {
    if (inView && !hasLoaded) setHasLoaded(true);
  }, [inView, hasLoaded]);

  // ── Inject <source> elements dynamically and call load() ─────────────────
  // Lazy-loading strategy: sources are only added to the DOM once the section
  // is visible. The children.length guard prevents duplicate injection on
  // subsequent re-renders.
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || !hasLoaded || videoEl.children.length > 0) return;

    if (video.webmSrc) {
      const webm = document.createElement('source');
      webm.src   = video.webmSrc;
      webm.type  = 'video/webm';
      videoEl.appendChild(webm);
    }

    const mp4 = document.createElement('source');
    mp4.src  = video.mp4Src;
    mp4.type = 'video/mp4';
    videoEl.appendChild(mp4);

    videoEl.load();
  }, [hasLoaded, video.mp4Src, video.webmSrc]);

  // ── Auto-play / pause based on viewport visibility ───────────────────────
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl || !hasLoaded) return;

    if (inView) {
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Autoplay prevent by browser', err);
            setIsPlaying(false);
          });
      }
    } else {
      videoEl.pause();
      setIsPlaying(false);
    }
  }, [inView, hasLoaded]);

  const togglePlay = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl.play();
      setIsPlaying(true);
    } else {
      videoEl.pause();
      setIsPlaying(false);
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <section
      ref={sectionRef}
      className="font-sans px-4 py-16 lg:px-12 xl:px-24 lg:py-24 max-w-[1600px] mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full items-stretch">

        {/* ── Left column: Text (35%) ─────────────────────────────────────── */}
        <div className="flex flex-col justify-center w-full lg:w-[35%] py-8 lg:py-12">
          <div>
            <h2 className="mb-4 text-4xl font-extrabold text-slate-800 lg:text-[3.5rem] leading-tight">
              {title}
            </h2>

            {description && (
              <p className="text-lg text-slate-500 font-normal mb-16 lg:mb-24">
                {description}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            {primaryCta && (
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-wider text-slate-800 transition-colors hover:bg-slate-800 hover:text-white"
              >
                {primaryCta.label}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 px-2 py-4 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors group"
              >
                {secondaryCta.label}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            )}
          </div>
        </div>

        {/* ── Right column: Asymmetric grid (65%) ─────────────────────────── */}
        <div className="w-full lg:w-[65%] grid grid-cols-1 lg:grid-cols-10 gap-1 lg:gap-[4px]">

          {/* Top row — both images always visible */}
          <div className="relative lg:col-span-5 w-full min-h-[320px] h-full bg-slate-100">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
          <div className="relative lg:col-span-5 w-full min-h-[320px] h-full bg-slate-100">
            <Image
              src={images[1].src}
              alt={images[1].alt}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Bottom row — image[2] is desktop-only */}
          <div className="relative hidden lg:block lg:col-span-4 w-full min-h-[350px] h-full bg-slate-100">
            <Image
              src={images[2].src}
              alt={images[2].alt}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Video cell */}
          <div className="relative lg:col-span-6 w-full aspect-[565/334] h-full bg-slate-900 group">
            <video
              ref={videoRef}
              poster={video.poster}
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-full object-cover"
            />

            {/* Play / Pause overlay button */}
            <button
              onClick={togglePlay}
              className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
            >
              {isPlaying
                ? <Pause weight="fill" className="h-6 w-6" />
                : <Play  weight="fill" className="h-6 w-6" />
              }
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
