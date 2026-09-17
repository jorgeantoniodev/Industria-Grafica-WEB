import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const response = NextResponse.redirect(new URL('/mantenimiento', request.url));
  
  response.cookies.delete('igc_preview_access');

  return response;
}
