import React, {ReactElement, useEffect, useState} from "react";
import {IoDocumentText} from "react-icons/io5";
import Layout from "@/pages/layout";
import {NextPageWithLayout} from "@/pages/_app";
import {CategoryTag} from "@/components/categoryTag";
import {VideoTag} from "@/components/videoTag";
import {Swiper} from "@/components/swiper";
import {SwiperData} from "@/lib/entitiy/swiperData";
import {VideoTagPlaceHoder} from "@/components/videoTagPlaceHoder";


function loadMore(setVideoTagPlaceHoderData: (value: (((prevState: any[]) => any[]) | any[])) => void, setVideoTagData: (value: (((prevState: any[]) => any[]) | any[])) => void) {
    let number = 10;
    setVideoTagPlaceHoderData(Array(number).fill(1))
    setTimeout(() => {
        setVideoTagPlaceHoderData(Array(0))
        setVideoTagData((old) => {
            old.push(...Array(number))
            return old;
        })

    }, 3000)
}

const Page: NextPageWithLayout = () => {

    const [videoTagData, setVideoTagData] = useState(Array(26).fill(1));
    const [videoTagPlaceHoderData, setVideoTagPlaceHoderData] = useState(Array(0));
    
    return (
        <>
            <div className="homeCategory flex items-center justify-between text-gray-700 max-w-[1920px] py-5">
                <div className="leftCategory flex items-center justify-between w-[200px] border-gray-200 mx-10">
                    <div className="flex flex-col items-center justify-between h-full">
                        <img src="/img_1.png"
                             className="w-[75px] h-[75px] rounded-full"/>
                        <p>动态</p>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <img src="/544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp"
                             className="w-[75px] h-[75px] rounded-full"/>
                        <p>热门</p>
                    </div>
                </div>
                <div
                    className="centerCategory flex items-center justify-around w-[1500px] border-x border-x-gray-300 h-[100px] flex-wrap px-5">
                    {
                        ["番剧", "电影", "国创", "电视剧", "综艺", "纪录片", "动画", "游戏", "鬼畜", "音乐", "舞蹈", "影视", "娱乐", "知识", "科技", "资讯", "美食", "生活", "汽车", "时尚", "运动", "更多"].map((item, index) => {
                            return <CategoryTag tagName={item} key={index}/>
                        })
                    }
                </div>
                <div
                    className="rightCategory flex items-center justify-between flex-wrap w-[250px] font-medium text-gray-400">
                    <div className="flex items-center justify-between ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px]">专栏</p>
                    </div>
                    <div className="flex items-center justify-between  ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px]  ml-3">活动</p>
                    </div>
                    <div className="flex items-center justify-between  ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px]">社区中心</p>
                    </div>
                    <div className="flex items-center justify-between  ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px] ">直播</p>
                    </div>
                    <div className="flex items-center justify-between  ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px]">课堂</p>
                    </div>
                    <div className="flex items-center justify-between  ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px]">新歌热榜</p>
                    </div>

                </div>
            </div>
            {/*<div className="homeRecommand flex gap-4">*/}


            {/*</div>*/}
            <div className="mainPost max-w-[1920px] grid-cols-5 grid gap-4">
                <Swiper swiperDataList={Array(
                    new SwiperData(1, "2", "123", "/img.png", ""),
                    new SwiperData(2, "2", "123", "/img.png", ""),
                    new SwiperData(3, "2", "123", "/img.png", ""),
                    new SwiperData(4, "2", "123", "/img.png", ""),
                    new SwiperData(5, "2", "123", "/img.png", ""),
                )}/>

                {
                    videoTagData.map((item, index) => {
                        return <VideoTag/>
                    })
                }

                {
                    videoTagPlaceHoderData.map((item, index) => {
                        return <VideoTagPlaceHoder/>
                    })
                }
    <button onClick={()=>loadMore(setVideoTagPlaceHoderData,setVideoTagData)} className="w-[20px] h-[20px]">123</button>
            </div>
        </>
    )
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default Page

