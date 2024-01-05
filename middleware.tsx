import {NextRequest, NextResponse} from "next/server";
import {useUserStore} from "@/lib/store/user.store";
import {Router} from "next/router";
export function middleware(request: NextRequest) {
    return NextResponse.next()
}
export const config = {
    matcher: ['/platform/:path*'],
}
