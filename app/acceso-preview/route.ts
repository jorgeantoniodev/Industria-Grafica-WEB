import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  const secretToken = process.env.PREVIEW_ACCESS_TOKEN;

  if (!token || !secretToken) {
    return NextResponse.redirect(new URL('/mantenimiento', request.url));
  }

  try {
    const tokenBuffer = Buffer.from(token);
    const secretBuffer = Buffer.from(secretToken);

    if (tokenBuffer.length === secretBuffer.length && crypto.timingSafeEqual(tokenBuffer, secretBuffer)) {
      const response = NextResponse.redirect(new URL('/', request.url));
      
      // Hash the token for the cookie value so we don't store the plain token in the cookie
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
  } catch (error) {
    console.error('Error verifying preview token', error);
  }

  return NextResponse.redirect(new URL('/mantenimiento', request.url));
}
