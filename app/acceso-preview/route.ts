import { NextResponse } from 'next/server';
import { getEnvVars } from '@/lib/env';
import crypto from 'crypto';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');

  const envVars = await getEnvVars();
  const secretToken = envVars.PREVIEW_ACCESS_TOKEN?.trim();

  if (!token || !secretToken || token.trim() !== secretToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const response = NextResponse.redirect(new URL('/', request.url));

  // Hash the token for the cookie value using Node Crypto
  const cookieValue = crypto.createHash('sha256').update(secretToken).digest('hex');

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
