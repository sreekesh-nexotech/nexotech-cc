import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-change-in-production";

// Paths that require authentication
const PROTECTED_PATHS = [
  '/api/leads',
  '/api/learning-content',
  '/dashboard',
  '/learning',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if path is protected
  const isProtected = PROTECTED_PATHS.some(path => pathname.startsWith(path));

  if (isProtected) {
    const token = request.cookies.get('auth_token')?.value;

    if (!token) {
      // Redirect to signin for pages, return 401 for API
      if (pathname.startsWith('/api')) {
        return NextResponse.json(
          { message: 'Unauthorized - Please login' },
          { status: 401 }
        );
      }
      return NextResponse.redirect(new URL('/signin', request.url));
    }

    try {
      // Verify JWT token
      jwt.verify(token, JWT_SECRET);
      // Token is valid, continue
      return NextResponse.next();
    } catch (error) {
      console.error('Invalid token:', error);

      // Clear invalid cookie
      const response = pathname.startsWith('/api')
        ? NextResponse.json({ message: 'Unauthorized - Invalid token' }, { status: 401 })
        : NextResponse.redirect(new URL('/signin', request.url));

      response.cookies.delete('auth_token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/leads/:path*',
    '/api/learning-content/:path*',
    '/dashboard/:path*',
    '/learning/:path*',
  ],
};
