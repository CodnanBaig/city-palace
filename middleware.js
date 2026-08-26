import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Keep the homepage and required static assets available.
  if (
    pathname === '/' ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/brochure/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Any former public page now resolves back to the homepage.
  const homeUrl = request.nextUrl.clone();
  homeUrl.pathname = '/';
  homeUrl.search = '';
  return NextResponse.redirect(homeUrl);
}

export const config = {
  matcher: '/:path*',
};
