import {HiOutlineUpload} from "react-icons/hi";
import React from "react";
import {useRouter} from "next/router";

export function UploadButton() {
    let router = useRouter();
    return <div
        className=" rounded-lg w-[90px] h-[35px]   bg-[#FF6699] flex items-center justify-center text-white font-medium hover:bg-[#FF8CB0]"
    >
        <HiOutlineUpload/>
        <button className="m-1 car"
                onClick={() =>  router.push("/platform/upload/video/frame")}
        >投稿</button>
    </div>;
}