import { NextResponse } from 'next/server';
import { getCookie } from 'cookies-next';

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const auth = getCookie('auth');
  if (!auth) return NextResponse.redirect(new URL('/login', request.url));
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
};
