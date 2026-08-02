'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause } from '@phosphor-icons/react';

export default function ProcessSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [inView, setInView] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    // Configuración del Intersection Observer para detectar si la sección está visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.2 } // Dispara cuando el 20% es visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Marca como cargado la primera vez que entra en la vista (para inyectar sources)
    useEffect(() => {
        if (inView && !hasLoaded) {
            setHasLoaded(true);
        }
    }, [inView, hasLoaded]);

    // Inyecta las fuentes WebM y MP4 dinámicamente y llama a load()
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (hasLoaded && video.children.length === 0) {
            const webm = document.createElement('source');
            webm.src = '/process.webm';
            webm.type = 'video/webm';
            
            const mp4 = document.createElement('source');
            mp4.src = '/process.mp4';
            mp4.type = 'video/mp4';

            video.appendChild(webm);
            video.appendChild(mp4);
            video.load();
        }
    }, [hasLoaded]);

    // Controla la reproducción automática basada en la visibilidad
    useEffect(() => {
        const video = videoRef.current;
        if (!video || !hasLoaded) return;

        if (inView) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch(error => {
                    console.log('Autoplay prevent by browser', error);
                    setIsPlaying(false);
                });
            }
        } else {
            video.pause();
            setIsPlaying(false);
        }
    }, [inView, hasLoaded]);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <section ref={sectionRef} className="font-sans px-4 py-16 lg:px-12 xl:px-24 lg:py-24 max-w-[1600px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full items-stretch">
                
                {/* Columna Izquierda: Texto (35%) */}
                <div className="flex flex-col justify-center w-full lg:w-[35%] py-8 lg:py-12">
                    <div>
                        <h2 className="mb-4 text-4xl font-extrabold text-slate-800 lg:text-[3.5rem] leading-tight">
                            Oficio en movimiento
                        </h2>
                        
                        <p className="text-lg text-slate-500 font-normal mb-16 lg:mb-24">
                            Offset, troquelado y encuadernación, en la planta de Barrio San Vicente.
                        </p>
                    </div>
                    
                    <div>
                        <a
                            href="#cotizar"
                            className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-transparent px-10 py-4 text-sm font-bold uppercase tracking-wider text-slate-800 transition-colors hover:bg-slate-800 hover:text-white"
                        >
                            Cotizar producción
                        </a>
                    </div>
                </div>

                {/* Columna Derecha: Grilla Asimétrica (65%) */}
                <div className="w-full lg:w-[65%] grid grid-cols-1 lg:grid-cols-10 gap-1 lg:gap-[4px]">
                    {/* Fila Superior */}
                    <div className="relative lg:col-span-5 w-full min-h-[250px] h-full bg-slate-100">
                        <Image src="/process-1.jpg" alt="Máquina Offset Industrial" fill className="object-cover w-full h-full" sizes="(max-width: 1024px) 100vw, 33vw" />
                    </div>
                    <div className="relative lg:col-span-5 w-full min-h-[250px] h-full bg-slate-100">
                        <Image src="/process-2.jpg" alt="Rodillos Offset en detalle" fill className="object-cover w-full h-full" sizes="(max-width: 1024px) 100vw, 33vw" />
                    </div>

                    {/* Fila Inferior */}
                    <div className="relative hidden lg:block lg:col-span-4 w-full min-h-[350px] h-full bg-slate-100">
                        <Image src="/process-3.jpg" alt="Apilado de packaging" fill className="object-cover w-full h-full" sizes="(max-width: 1024px) 100vw, 33vw" />
                    </div>
                    
                    {/* Celda del Video */}
                    <div className="relative lg:col-span-6 w-full aspect-[565/334] h-full bg-slate-900 group">
                        <video
                            ref={videoRef}
                            poster="/process-poster.jpg"
                            loop
                            muted
                            playsInline
                            preload="none"
                            className="w-full h-full object-cover"
                        />
                        
                        {/* Control de Video Play/Pause */}
                        <button
                            onClick={togglePlay}
                            className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50"
                            aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
                        >
                            {isPlaying ? (
                                <Pause weight="fill" className="h-6 w-6" />
                            ) : (
                                <Play weight="fill" className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
