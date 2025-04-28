# URL Protection Implementation Guide for Next.js with Firebase

## Overview
This guide explains how to implement URL protection for authenticated routes in a Next.js application using Firebase Authentication. The implementation ensures that only authenticated users can access specific routes while redirecting unauthenticated users to the login page.

## Step 1: Middleware Setup

Create a new file `src/middleware.js` to handle route protection:

```js
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
        '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    ],
}
```

### Key Components Explained:

1. **Protected Routes Array**:
   ```js
   const protectedRoutes = [
       '/',
       '/trending',
       '/about',
       '/faq'
   ]
   ```
   - This array contains all routes that require authentication
   - Add or remove routes based on your application's requirements
   - Each route should match exactly with your application's URL structure

2. **Middleware Function**:
   ```js
   export function middleware(request) {
       const session = request.cookies.get('session')
       const { pathname } = request.nextUrl
       // ... rest of the code
   }
   ```
   - Runs on every request to your application
   - Checks for session cookie to determine authentication status
   - Extracts current pathname from the request URL

3. **Route Protection Logic**:
   ```js
   const isProtectedRoute = protectedRoutes.some(route => pathname === route)
   if (isProtectedRoute && !session) {
       return NextResponse.redirect(new URL('/auth/login', request.url))
   }
   ```
   - Checks if current route is in protected routes list
   - Redirects to login if route is protected and user is not authenticated
   - Uses NextResponse for handling redirects

4. **Matcher Configuration**:
   ```js
   export const config = {
       matcher: [
           '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
       ],
   }
   ```
   - Defines which routes the middleware should run on
   - Excludes static files, API routes, and public assets
   - Uses regex pattern for efficient matching

## Step 2: Navigation Component Integration

The navigation component (`src/app/components/Nav/index.jsx`) handles the display of different links based on authentication status:

```jsx
const nonRegisteredLinks = [
    { title: "About", path: "/about" },
    { title: "FAQ", path: "/faq" },
    { title: "Login", path: "/auth/login" },
]

const registeredLinks = [
    { title: "Explore", path: "/", },
    { title: "Trending", path: "/trending" },
    { title: "About", path: "/about" },
    { title: "FAQ", path: "/faq" },
    { title: "Logout", path: "/#", id: "logout-btn" },
]
```

### Navigation Logic:

1. **Link Management**:
   - `nonRegisteredLinks`: Available to all users
   - `registeredLinks`: Only available to authenticated users
   - Links are conditionally rendered based on authentication status

2. **Authentication State**:
   ```jsx
   const availableLinks = props.user ? registeredLinks : nonRegisteredLinks
   ```
   - Uses the `user` prop to determine which links to show
   - Automatically updates when authentication state changes

## Step 3: Authentication Flow

1. **User Access Attempt**:
   - User tries to access a protected route
   - Middleware checks for session cookie
   - If no session exists, redirects to login page

2. **Login Process**:
   - User logs in through Firebase Authentication
   - Session cookie is set upon successful authentication
   - User is redirected to originally requested page

3. **Protected Route Access**:
   - Middleware verifies session cookie
   - If valid, allows access to protected route
   - If invalid, redirects to login

## Best Practices

1. **Security**:
   - Always verify authentication on both client and server side
   - Use secure session management
   - Implement proper error handling

2. **User Experience**:
   - Provide clear feedback for authentication status
   - Maintain user's intended destination after login
   - Handle edge cases gracefully

3. **Performance**:
   - Optimize middleware execution
   - Cache authentication state when appropriate
   - Minimize unnecessary redirects

4. **Maintenance**:
   - Keep protected routes list updated
   - Monitor authentication flow
   - Regular security audits

## Common Issues & Solutions

1. **Session Management**:
   - Problem: Session cookie not persisting
   - Solution: Ensure proper cookie configuration and Firebase session handling

2. **Redirect Loops**:
   - Problem: Infinite redirect between protected route and login
   - Solution: Implement proper session validation and error handling

3. **Route Protection**:
   - Problem: Routes not properly protected
   - Solution: Verify middleware configuration and route matching

## Additional Resources

- [Next.js Middleware Documentation](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
- [Next.js Authentication Guide](https://nextjs.org/docs/authentication)

## Implementation Notes

1. **Environment Setup**:
   - Ensure Firebase configuration is properly set up
   - Configure environment variables for sensitive data
   - Set up proper CORS and security headers

2. **Testing**:
   - Test authentication flow thoroughly
   - Verify protected route behavior
   - Check edge cases and error handling

3. **Deployment**:
   - Configure proper build settings
   - Set up environment variables in production
   - Monitor authentication performance

## Conclusion

This implementation provides a robust solution for protecting routes in a Next.js application using Firebase Authentication. It ensures that only authenticated users can access protected routes while maintaining a good user experience and following security best practices.
