import {HiOutlineUpload} from "react-icons/hi";
import React from "react";

export function UploadButton() {
    return <div
        className=" rounded-lg w-[90px] h-[35px]   bg-[#FF6699] flex items-center justify-center text-white font-medium hover:bg-[#FF8CB0]">
        <HiOutlineUpload/>
        <p className="m-1">投稿</p>
    </div>;
}