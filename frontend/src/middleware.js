import { NextResponse } from 'next/server'
import { auth } from '@/firebase/config'

// List of protected routes that require authentication
const protectedRoutes = [
    '/',
    '/trending',
    '/about',
    '/faq'
]

export function middleware(request) {
    const session = request.cookies.get('session')
    const { pathname } = request.nextUrl

    // Check if the current route is protected
    const isProtectedRoute = protectedRoutes.some(route => pathname === route)

    // If the route is protected and there's no session, redirect to login
    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    ],
} 