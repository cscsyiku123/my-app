import {NextRequest, NextResponse} from "next/server";
useLocalStorage()
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/home', request.url))
}
export const config = {
    matcher: '/about/:path*',
}
