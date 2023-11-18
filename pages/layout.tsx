import Navigate from "@/components/navigate";
import React, {ReactElement, ReactNode} from "react";
import {useRouter} from "next/router";

export default function Layout({children}: { children: ReactElement }) {
    const router = useRouter()
    return (
        <>
            <Navigate></Navigate>
            <div className="mx-20 w-[1920px]">
                {children}
            </div>
            <div className="footer">
            </div>
        </>
    )
}
