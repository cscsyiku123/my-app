import Navigate from "@/components/navigate";
import React, {ReactElement, ReactNode, useEffect} from "react";
import {useRouter} from "next/router";
import AuthOverly from "@/components/authOverly";
import useNextStore from "@/lib/store/store";
import {useUserStore} from "@/lib/store/user.store";


export default function Layout({children}: { children: ReactElement }) {
    const router = useRouter()
    let {openAuthOverlay} = useNextStore(useUserStore, (state) => state);
    useEffect(() => {
        var {isReady, query,pathname} = router as unknown as { isReady: boolean, query:any,pathname:string }
        if (isReady) {
           if (pathname.startsWith('/platform') && useUserStore.getState().user === null) {
               router.back()
               useUserStore.setState({openAuthOverlay: true})
           }
        }
    }, [router.query]);
    return (
        <div className=" flex flex-col items-center lg:w-full min-w-[1280px]">
            {openAuthOverlay && <AuthOverly></AuthOverly>}
            <Navigate/>
            {children}
            <div className="footer">
            </div>
        </div>
    )
}
