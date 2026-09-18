import { NextResponse } from 'next/server';
import { getEnvVars } from '@/lib/env';

// Convert array buffer to hex string
function buf2hex(buffer: ArrayBuffer) {
  return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');

  const envVars = await getEnvVars();
  const secretToken = envVars.PREVIEW_ACCESS_TOKEN?.trim();

  if (!token || !secretToken || token.trim() !== secretToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const response = NextResponse.redirect(new URL('/', request.url));

  // Hash the token for the cookie value using Web Crypto API
  const encoder = new TextEncoder();
  const data = encoder.encode(secretToken);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const cookieValue = buf2hex(hashBuffer);

  response.cookies.set({
    name: 'igc_preview_access',
    value: cookieValue,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  });

  return response;
}
