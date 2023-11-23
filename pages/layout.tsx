import Navigate from "@/components/navigate";
import React, {ReactElement, ReactNode} from "react";
import {useRouter} from "next/router";

export default function Layout({children}: { children: ReactElement }) {
    const router = useRouter()
    return (
        <div className="flex flex-col items-center bg-gray-50">
            <Navigate/>
            <div className="w-[1920px] mt-2 ">
                {children}
            </div>
            <div className="footer">
            </div>
        </div>
    )
}
