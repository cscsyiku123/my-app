import React from "react";

export function CategoryTag(props: { tagName: string }) {
    return <div
        className="tracking-widest flex  items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 min-w-[35px]  h-[35px] text-[14px] font-medium flex-wrap m-[2px] rounded-[8px]">{props.tagName}</div>;
}