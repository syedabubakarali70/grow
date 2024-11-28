import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Assuming we check for a cookie named `isLoggedIn`
    const isLoggedIn = request.cookies.get('isLoggedIn')?.value === 'true';

    // Define the paths where this middleware should apply
    const protectedPaths = ['/categories'];

    // Check if the request path starts with any protected path
    const isProtected = protectedPaths.some((path) =>
        request.nextUrl.pathname.startsWith(path)
    );

    if (isProtected && !isLoggedIn) {
        // Redirect to /login if not logged in
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }

    // Allow request to proceed if logged in or not a protected path
    return NextResponse.next();
}

export const config = {
    // Apply middleware to /categories and its sub-paths
    matcher: ['/categories/:path*'],
};
