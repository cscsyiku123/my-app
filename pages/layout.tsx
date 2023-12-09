import Navigate from "@/components/navigate";
import React, {ReactElement, ReactNode} from "react";
import {useRouter} from "next/router";

export default function Layout({children}: { children: ReactElement }) {
    const router = useRouter()
    return (
        <div className=" flex flex-col items-center lg:w-full min-w-[1280px]">
            <Navigate/>
            {children}
            <div className="footer">
            </div>
        </div>
    )
}
