import React, {ReactElement} from "react";
import {IoDocumentText} from "react-icons/io5";
import Layout from "@/pages/layout";
import {NextPageWithLayout} from "@/pages/_app";
import {CategoryTag} from "@/components/categoryTag";
import {VideoTag} from "@/components/videoTag";
import {Swiper} from "@/components/swiper";


const Page: NextPageWithLayout = () => {
    return (<>
            <div className="homeCategory flex items-center justify-between text-gray-700 max-w-[1920px] py-5">
                <div className="leftCategory flex items-center justify-between w-[200px] border-gray-200 mx-10">
                    <div className="flex flex-col items-center justify-between h-full">
                        <img src="/544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp"
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
                    {["番剧", "电影", "国创", "电视剧", "综艺", "纪录片", "动画", "游戏", "鬼畜", "音乐", "舞蹈", "影视", "娱乐", "知识", "科技", "资讯", "美食", "生活", "汽车", "时尚", "运动", "更多"].map((item, index) => {
                        return <CategoryTag tagName={item} key={index}/>
                    })}
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
            <div className="homeRecommand flex">
                <Swiper swiperDataList={Array()}/>
                <div className="flex justify-between flex-wrap ml-8 w-[1100px]">
                    <VideoTag/>
                    <VideoTag/>
                    <VideoTag/>
                    <VideoTag/>
                    <VideoTag/>
                    <VideoTag/>

                </div>

            </div>
            <div className="mainPost max-w-[1920px] flex items-center justify-between flex-wrap">
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
                <VideoTag/>
            </div>
        </>)
}

Page.getLayout = function getLayout(page: ReactElement) {
    return (<Layout>
            {page}
        </Layout>)
}


export default Page

