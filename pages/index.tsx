import {useState} from "react";

function TagCategory({tagName}: { tagName?: string }) {
    return <div
        className=" flex items-center justify-center bg-gray-100 text-gray-700 w-[120px] h-[35px] text-[8px] font-medium flex-wrap m-[2px] rounded-[8px]">{tagName}</div>;
}

function VideoTag() {
    return <div className="videoTag flex flex-col w-[400px] h-[300px] rounded-[8px]  justify-between pb-1">
        <img src="example.png" className="object-cover rounded-[8px]"/>
        <div className=" font-medium">9.0分超越《无证之罪》，国产悬疑扛鼎之作？全集解说《沉默的真相》</div>
        <div className=" font-medium text-gray-300 text-[5px] pl-2">
            <div className="text-orange-500 bg-orange-200 inline">1万点赞</div>
            <div className=" inline-block ml-1">若雨随影· 10-12</div>
        </div>
    </div>;
}

export default function () {
    const [searchDetailShow, setSearchDetailShow] = useState(false)
    return (
        <>
            <div className="navigate w-full h-[75px] bg-amber-200 flex items-center justify-center font-medium text-white">

                <div>首页</div>
                <div>番剧</div>
                <div>直播</div>
                <div>游戏中心</div>
                <div>会员购</div>
                <div className="searchTopBar h-[40px] w-[300px] bg-gray-100 rounded-2xl flex items-center justify-around relative">
                    <input className=" bg-transparent focus:outline-none placeholder:font-medium placeholder-gray-300 text-gray-700 gr w-[250px] font-light" type="text" placeholder="T1训练营" onBlur={()=>setSearchDetailShow(false)} onFocus={()=>setSearchDetailShow(true)}/>
                    <div className="searchIcon"></div>
                    {searchDetailShow &&
                        <div className="w-full absolute bg-white rounded-lg top-[40px] left-0 text-gray-700  p-3">
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="font-bold  ">搜索历史</div>
                                    <div className=" text-gray-200 border-l border-l-gray-200 text-[12px] hover:text-blue-300 pl-2">清空</div>
                                </div>
                                <div className=" mt-3 font-light text-[12px] flex items-center justify-between content-between flex-wrap">
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
                            </div>
                        </div>
                    }
                </div>

            </div>

            <div className="homeCategory flex items-center justify-between text-gray-700 w-[1920px] ">
                <div className="leftCategory">

                    <div>动态</div>
                    <div>热门</div>
                </div>
                <div
                    className="centerCategory flex items-center justify-around w-[700px] border-x border-x-gray-300 h-[120px] flex-wrap">
                    {
                        ["番剧", "国创", "综艺"].map((item, index) => {
                            return <TagCategory tagName={item} key={index}/>
                        })
                    }
                </div>
                <div className="rightCategory">
                    <div>专栏</div>
                    <div>活动</div>
                </div>
            </div>
            <div className="homeRecommand flex w-[1920px]">
                <div className="w-[850px] h-[550px] bg-orange-200"></div>
                <div className="flex justify-between flex-wrap">
                    <VideoTag/>

                </div>

            </div>
            <div className="mainPost w-[1920px]"></div>
        </>
    )
}

