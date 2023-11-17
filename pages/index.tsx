import React, {useEffect, useState} from "react";
import { IoDocumentText } from "react-icons/io5";

function TagCategory({tagName}: { tagName?: string }) {
    return <div
        className="tracking-widest	 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 w-[120px] h-[35px] text-[14px] font-medium flex-wrap m-[2px] rounded-[8px]">{tagName}</div>;
}
function VideoTag() {
    return <div className="videoTag flex flex-col min-w-[250px] max-w-[350px] h-[300px] rounded-[8px]  justify-between pb-1 font-medium">
        <img src="example.png" className="object-cover rounded-[8px]"/>
        <div className=" ">9.0分超越《无证之罪》，国产悬疑扛鼎之作？全集解说《沉默的真相》</div>
        <div className=" text-gray-300 text-[12px] pl-2">
            <div className="text-orange-500 bg-orange-200 inline">1万点赞</div>
            <div className=" inline-block ml-1">若雨随影· 10-12</div>
        </div>
    </div>;
}

function Swiper(props: { swiperCheckoutIndex: number, callbackfn: (item, index) => JSX.Element }) {
    return <div className="homeSwiper w-[850px] h-[550px]  relative flex items-center justify-center ">
        <div className="w-full h-full overflow-hidden rounded-[8px]">
            <div className="w-[calc(100%*3)] h-full border-solid  transition-all duration-500"
                 style={{marginLeft: `calc(-100%*${props.swiperCheckoutIndex})`}}>
                <div className="w-[calc(100%/3)] h-full float-left bg-blue-200 float-left"></div>
                <div className="w-[calc(100%/3)] h-full float-left bg-red-200 float-left"></div>
                <div className="w-[calc(100%/3)] h-full float-left bg-yellow-200 float-left"></div>
            </div>
        </div>
        <div className="flex items-center justify-center absolute bottom-5">
            {
                Array(3).fill(1).map(props.callbackfn)}
        </div>
    </div>;
}

export default function () {
    const [searchDetailShow, setSearchDetailShow] = useState(true)
    const [swiperCheckoutIndex, setSwiperCheckoutIndex] = useState(0)
    useEffect(() => {
        const swiperInterval = setInterval(() => {
            setSwiperCheckoutIndex((old) =>{
                console.log(old)
                return (old + 1) % 3;
            })
        }, 3000)
        return () => {
            clearInterval(swiperInterval)
        }
    }, [])
    return (
        <>
            <div className="navigate w-full h-[75px] bg-amber-200 flex items-center justify-between font-medium text-white">
                <div className="leftNavigate flex items-center justify-between">
                    <div className="font-medium">首页</div>
                    <div>番剧</div>
                    <div>直播</div>
                    <div>游戏中心</div>
                    <div>会员购</div>
                </div>
                <div className="searchTopBar h-[40px] w-[300px] bg-gray-100 rounded-2xl flex items-center justify-around relative">
                    <input
                        className=" bg-transparent hover:bg-white focus:outline-none placeholder:font-medium placeholder-gray-300 text-gray-500  w-[250px] font-light"
                        type="text" placeholder="T1训练营" onBlur={() => setSearchDetailShow(false)}
                        onFocus={() => setSearchDetailShow(true)}/>
                    <div className="searchIcon"></div>
                    {searchDetailShow &&
                        <div className="w-full absolute bg-white rounded-lg top-[40px] left-0 text-gray-700  p-3">
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="font-medium">搜索历史</div>
                                    <div className=" text-gray-200 border-l border-l-gray-200 text-[12px] hover:text-blue-300 pl-2">清空
                                    </div>
                                </div>
                                <div
                                    className=" mt-3 font-light text-[12px] flex items-center justify-between content-between flex-wrap">
                                    <div className="bg-gray-300 p-0.5 rounded-lg hover:bg-gray-400 relative">123
                                        <div className="absolute rounded-full "></div>
                                    </div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="font-medium">热搜</div>
                                </div>
                                <div className="flex items-center justify-between">
                                    {
                                        ["1 1231","2 1231231"].map((item, index) => {
                                            return <div className=" p-0.5 rounded-lg hover:bg-gray-200  "
                                                        key={index}>
                                                {item}
                                            </div>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="rightNavigate flex items-center justify-between">
                    <img src="544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp" className="avator w-[50px] h-[50px] rounded-full"/>
                    <div className="flex flex-col items-center justify-between h-full">
                        <img src="544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp" className="w-[50px] h-[50px] rounded-full"/>
                        <p>大会员</p>
                    </div>
                    <div className="flex flex-col items-center justify-between h-full">
                        <img src="544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp" className="w-[50px] h-[50px] rounded-full"/>
                        <p>消息</p>
                    </div>
                    <div className="flex flex-col items-center justify-between h-full">
                        <img src="544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp" className="w-[50px] h-[50px] rounded-full"/>
                        <p>动态</p>
                    </div>
                    <div className="flex flex-col items-center justify-between h-full">
                        <img src="544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp" className="w-[50px] h-[50px] rounded-full"/>
                        <p>收藏</p>
                    </div>
                </div>
            </div>
            <div className=" mx-20 w-[1920px]">
                <div className="homeCategory flex items-center justify-between text-gray-700 max-w-[1920px] py-5 h-[145px]">
                    <div className="leftCategory flex items-center justify-between w-[200px] border-gray-200 mx-10">
                        <div className="flex flex-col items-center justify-between h-full">
                            <img src="544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp" className="w-[75px] h-[75px] rounded-full"/>
                            <p>动态</p>
                        </div>
                        <div className="flex flex-col items-center justify-between">
                            <img src="544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp" className="w-[75px] h-[75px] rounded-full"/>
                            <p>热门</p>
                        </div>
                    </div>
                    <div
                        className="centerCategory flex items-center justify-around w-[1500px] border-x border-x-gray-300 h-[100px] flex-wrap px-5">
                        {
                            ["番剧", "电影", "国创", "电视剧", "综艺", "纪录片", "动画", "游戏", "鬼畜", "音乐", "舞蹈", "影视", "娱乐", "知识", "科技", "资讯", "美食", "生活", "汽车", "时尚", "运动", "更多"].map((item, index) => {
                                return <TagCategory tagName={item} key={index}/>
                            })
                        }
                    </div>
                    <div className="rightCategory flex items-center justify-between flex-wrap w-[250px] font-medium text-gray-400">
                        <div className="flex items-center justify-between ml-3">
                            <IoDocumentText />
                            <p className="ml-1.5 text-gray-700 text-[14px]">专栏</p>
                        </div>
                        <div className="flex items-center justify-between  ml-3">
                            <IoDocumentText />
                            <p className="ml-1.5 text-gray-700 text-[14px]  ml-3">活动</p>
                        </div>
                        <div className="flex items-center justify-between  ml-3">
                            <IoDocumentText />
                            <p className="ml-1.5 text-gray-700 text-[14px]">社区中心</p>
                        </div>
                        <div className="flex items-center justify-between  ml-3">
                            <IoDocumentText />
                            <p className="ml-1.5 text-gray-700 text-[14px] ">直播</p>
                        </div>
                        <div className="flex items-center justify-between  ml-3">
                            <IoDocumentText />
                            <p className="ml-1.5 text-gray-700 text-[14px]">课堂</p>
                        </div>
                        <div className="flex items-center justify-between  ml-3">
                            <IoDocumentText />
                            <p className="ml-1.5 text-gray-700 text-[14px]">新歌热榜</p>
                        </div>

                    </div>
                </div>
                <div className="homeRecommand flex h-[650px]">
                    <Swiper swiperCheckoutIndex={swiperCheckoutIndex} callbackfn={(item, index) => {
                        return (
                            <label
                                className="bg-white w-[20px] h-[20px] rounded-full cursor-pointer m-2 hover:scale-125 "></label>
                        )
                    }}/>
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
                </div>
            </div>
            <div className="footer">

            </div>
        </>
    )
}

