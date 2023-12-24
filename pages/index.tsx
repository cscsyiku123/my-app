import React, {ReactElement, useEffect, useRef, useState} from "react";
import {IoDocumentText} from "react-icons/io5";
import Layout from "@/pages/layout";
import {NextPageWithLayout} from "@/pages/_app";
import {CategoryTag} from "@/components/categoryTag";
import {VideoCard} from "@/components/videoCard";
import {Swiper} from "@/components/swiper";
import {SwiperData} from "@/lib/entitiy/swiperData";
import {VideoCardPlaceHoder} from "@/components/videoCardPlaceHoder";
import {findVideoByAuthorId, findVideoByRecommand, VideoVo} from "@/lib/utils/api/RemoteSwaggerService";


function loadMore(setVideoTagPlaceHoderData: (value: (((prevState: any[]) => any[]) | any[])) => void, setVideoTagData: (value: (((prevState: any[]) => any[]) | any[])) => void, loading: React.MutableRefObject<boolean>) {
    console.log("loadMore")
    let number = 10;
    setVideoTagPlaceHoderData(Array(number).fill(1))
    setTimeout(() => {
        setVideoTagPlaceHoderData(Array(0))
        setVideoTagData((old) => {
            old.push(...Array(number))
            console.log(`old:${old.length}`)
            return old;
        })
        loading.current = false;
    }, 3000)
}

const Page: NextPageWithLayout = () => {

    const [videoTagData, setVideoTagData] = useState<VideoVo[]>(Array(0));
    const [videoTagPlaceHoderData, setVideoTagPlaceHoderData] = useState(Array(0));
    const loading = useRef(false);
    const [load, setLoad] = useState(true);
    useEffect(()=>{
        findVideoByRecommand({
            requestBody: {
                page :{
                    pageIndex: 1,
                    pageSize: 10
                }
            }}).then((value => {
            setVideoTagData(value.data)
        }))


        let scrollListener = ()=>{
            const windowHeight =
                'innerHeight' in window
                    ? window.innerHeight
                    : document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const documentHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );
            const windowBottom = windowHeight + window.pageYOffset;
            // console.log(windowBottom)
            // console.log(documentHeight)
            if (windowBottom+100 >= documentHeight && !loading.current && load) {
                console.log(`loading:${loading.current}`)
                loading.current = true;
                loadMore(setVideoTagPlaceHoderData,setVideoTagData,loading)
            }
        };
        window.addEventListener('scroll', scrollListener);
        return ()=>{
            window.removeEventListener('scroll', scrollListener);
        }
    },[])
    return (
        <div className={'w-full  max-w-[1920px]'}>
            <div className="homeCategory flex items-center justify-between text-gray-700    py-5">
                <div className="leftCategory flex items-center justify-between w-[150px] border-gray-200 mx-5 flex-shrink-0">
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
                    className="centerCategory grid grid-rows-2  grid-flow-col gap-3  w-[1500px]   border-x border-x-gray-300 h-[100px]  px-5 ">
                    {
                        ["番剧", "电影", "国创", "电视剧", "综艺", "纪录片", "动画", "游戏", "鬼畜", "音乐", "舞蹈", "影视", "娱乐", "知识", "科技", "资讯", "美食", "生活", "汽车", "时尚", "运动", "更多"].map((item, index) => {
                            return <CategoryTag tagName={item} key={index}/>
                        })
                    }
                </div>
                <div
                    className="rightCategory grid grid-rows-2  grid-flow-col  min-w-[250px]  font-medium text-gray-400">
                    <div className="flex items-center justify-start ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px]">专栏</p>
                    </div>
                    <div className="flex items-center justify-start  ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px]  ml-3">活动</p>
                    </div>
                    <div className="flex items-center justify-start  ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px]">社区中心</p>
                    </div>
                    <div className="flex items-center justify-start  ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px] ">直播</p>
                    </div>
                    <div className="flex items-center justify-start  ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px]">课堂</p>
                    </div>
                    <div className="flex items-center justify-start  ml-3">
                        <IoDocumentText/>
                        <p className="ml-1.5 text-gray-700 text-[14px]">新歌热榜</p>
                    </div>

                </div>
            </div>
            {/*<div className="homeRecommand flex gap-4">*/}


            {/*</div>*/}
            <div className="mainPost  grid-cols-5 grid gap-4">
                <Swiper swiperDataList={Array(
                    new SwiperData(1, "2", "123", "/img.png", ""),
                    new SwiperData(2, "2", "123", "/img.png", ""),
                    new SwiperData(3, "2", "123", "/img.png", ""),
                    new SwiperData(4, "2", "123", "/img.png", ""),
                    new SwiperData(5, "2", "123", "/img.png", ""),
                )}/>

                {
                    videoTagData.map((item, index) => {
                        return <VideoCard video={item}/>
                    })
                }

                {
                    videoTagPlaceHoderData.map((item, index) => {
                        return <VideoCardPlaceHoder/>
                    })
                }

            </div>
        </div>
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

