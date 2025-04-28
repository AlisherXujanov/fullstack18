import { NextResponse } from 'next/server'
import { auth } from '@/firebase/config'
import { registeredLinks as protectedRoutes } from '@/store'


// We MUST call this as 'middleware'
export function middleware(request) {
    const session = request.cookies.get('session')
    const { pathname } = request.nextUrl

    // Extract just the paths from protectedRoutes
    const protectedPaths = protectedRoutes.map(route => route.path)

    // Check if the current route is protected
    const isProtectedRoute = protectedPaths.includes(pathname)

    // If the route is protected and there's no session, redirect to login
    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    ],
}