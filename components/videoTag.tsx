import React from "react";

export function VideoTag() {
    return <div className="videoTag flex flex-col min-w-[250px] max-w-[350px] h-[300px] rounded-[8px]  justify-between pb-1 font-medium">
        <img src="example.png" className="object-cover rounded-[8px]"/>
        <div className=" ">9.0分超越《无证之罪》，国产悬疑扛鼎之作？全集解说《沉默的真相》</div>
        <div className=" text-gray-300 text-[12px] pl-2">
            <div className="text-orange-500 bg-orange-200 inline">1万点赞</div>
            <div className=" inline-block ml-1">若雨随影· 10-12</div>
        </div>
    </div>;
}
