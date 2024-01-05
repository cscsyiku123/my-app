import React from "react";
import {useRouter} from "next/router";
import {VideoVo} from "@/lib/utils/api/RemoteSwaggerService";
import {backendBaseUrl, formatTime, transHumanNumber} from "@/lib/utils/utils";
import Link from "next/link";

export function VideoCard(props: { video: VideoVo }) {
    const route = useRouter();
    return <Link href={`/video/${props.video.id}`} target="_blank">
        <div className="videoTag flex flex-col min-w-[250px] max-w-[350px] h-[300px] rounded-[8px]  justify-between pb-1 font-medium cursor-pointer"
             // onClick={() => {
             //     route.push(`/video/${props.video.id}`)
             // }}
        >
            <img src={`${backendBaseUrl}${props.video.coverImageLink}`} className="object-cover rounded-[8px] h-[70%]"/>
            <div className=" ">{props.video.name}</div>
            <div className=" text-gray-300 text-[12px] pl-2">
                {
                    props.video.likeCount >= 10000 && <div className="text-orange-500 bg-orange-200 inline">{transHumanNumber(props.video.likeCount)}点赞</div>
                }
                <div className=" inline-block ml-1">{props.video.authorName}· {formatTime(props.video.createTime, 'MM-dd')}</div>
            </div>
        </div>
    </Link>;
}
