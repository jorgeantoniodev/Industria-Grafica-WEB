import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import * as crypto from 'crypto';

export function proxy(request: NextRequest) {
  return handleProxy(request);
}

export function middleware(request: NextRequest) {
  return handleProxy(request);
}

export default function handleProxy(request: NextRequest) {
  const isMaintenance = process.env.MAINTENANCE_MODE === 'true';

  // If not in maintenance mode, just return normally.
  if (!isMaintenance) {
    return NextResponse.next();
  }

  const path = request.nextUrl.pathname;

  // Paths that are always allowed during maintenance
  if (
    path === '/mantenimiento' ||
    path === '/acceso-preview' ||
    path === '/salir-preview' ||
    path.startsWith('/_next/') ||
    path.match(/\.(png|jpg|jpeg|svg|webp|gif|ico|mp4)$/)
  ) {
    const response = NextResponse.next();
    // Add noindex headers to everything during maintenance just in case
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    response.headers.set('Cache-Control', 'private, no-store');
    return response;
  }

  // Check for the secure cookie
  const cookieName = 'igc_preview_access';
  const accessCookie = request.cookies.get(cookieName);
  const secretToken = process.env.PREVIEW_ACCESS_TOKEN;

  let hasAccess = false;
  
  if (accessCookie && secretToken) {
    const expectedValue = crypto.createHash('sha256').update(secretToken).digest('hex');
    if (accessCookie.value === expectedValue) {
      hasAccess = true;
    }
  }

  if (hasAccess) {
    // Has valid cookie, allow access but add privacy headers
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    response.headers.set('Cache-Control', 'private, no-store');
    return response;
  }

  // No valid cookie -> rewrite to /mantenimiento
  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = '/mantenimiento';
  const response = NextResponse.rewrite(rewriteUrl);
  
  response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  response.headers.set('Cache-Control', 'private, no-store');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
