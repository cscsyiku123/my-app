import {NextRequest, NextResponse} from "next/server";
import {useUserStore} from "@/lib/store/user.store";
export function middleware(request: NextRequest) {
    let {user} = useUserStore();
    if (user.userId) {
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('/', request.url))
}
export const config = {
    matcher: '/user/(.*)',
}
