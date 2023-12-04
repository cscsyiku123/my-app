import React, {useState} from "react";
import {MdOutlineKeyboardArrowDown, MdOutlineMailOutline} from "react-icons/md";
import {IoIosSearch} from "react-icons/io";
import {HiOutlineUpload} from "react-icons/hi";
import {IconType} from "react-icons/lib";
import {RiVipCrown2Line} from "react-icons/ri";
import {TbBulb, TbWindmill} from "react-icons/tb";
import {FaRegStar} from "react-icons/fa";
import {LiaHistorySolid} from "react-icons/lia";
import {UploadButton} from "@/components/uploadButton";

function SearchHistoryTag(props: { name: string }) {
    return (
        <div
            className="flex items-center justify-center bg-gray-100 rounded-lg hover:text-blue-300  px-2 text-[14px] h-[25px] ">{props.name}</div>
    )
}

function NavigateRightCategory(props: { name: string, icon: IconType }) {
    return <div className="flex flex-col items-center h-full gap-0.5 justify-center  ">
        <props.icon className="w-[18px] h-[18px] scale-125 text-gray-700"/>
        <p className="text-gray-350 font-semibold  text-[12px] text-gray-500 hidden md:block">{props.name}</p>
    </div>;
}



export default function () {
    const [searchDetailShow, setSearchDetailShow] = useState(false)

    return (
        <div className="navigate w-full  z-50 bg-white shadow-md flex items-center justify-between h-[75px] min-w-[1920px] sticky  top-0 block ">
            <div
                className="leftNavigate ml-5 flex items-center gap-8 w-[800px] text-[16px]    ">
                <div className=" group flex items-center relative ">
                    <p>首页</p>
                    <MdOutlineKeyboardArrowDown className="transition-all duration-500 group-hover:rotate-180"/>
                    <div
                        className="z-10 absolute -bottom-[75px] transition-all duration-500 opacity-0 group-hover:opacity-100 w-[500px] p-5 border-2 border-gray-300 border-solid shadow bg-white">
                    </div>
                </div>
                <div>番剧</div>
                <div>直播</div>
                <div>游戏中心</div>
                <div>会员购</div>
                <div>漫画</div>
                <div>漫画</div>
                <div>赛事</div>
                <div>下载客户端</div>
            </div>
            <div
                className="searchTopBar h-[40px] w-[500px] bg-gray-50 rounded-lg flex items-center justify-around hover:bg-white relative border-2 border-solid p-1 transition-colors duration-700">
                <input
                    className="focus:bg-gray-200 rounded-[5px] w-full h-full bg-transparent  focus:outline-none placeholder:font-normal placeholder-gray-300 text-gray-500  w-[250px] font-light"
                    type="text" placeholder="T1训练营" onBlur={() => setSearchDetailShow(false)}
                    onFocus={() => setSearchDetailShow(true)}/>
                <IoIosSearch className="h-[30px] w-[30px] p-1 rounded  hover:bg-gray-200 z-10"/>
                {searchDetailShow &&
                    <div className="w-full absolute bg-white rounded-lg top-[40px] left-0 text-gray-700  p-3 shadow">
                        <div>
                            <div className="flex items-center justify-between">
                                <div className="font-medium">搜索历史</div>
                                <div
                                    className=" text-gray-200 border-l border-l-gray-200 text-[12px] hover:text-blue-300 pl-2">清空
                                </div>
                            </div>
                            <div
                                className=" mt-3 font-light flex items-center justify-between content-between flex-wrap">
                                <SearchHistoryTag name="123"/>
                                <SearchHistoryTag name="123"/>
                                <SearchHistoryTag name="123"/>
                                <SearchHistoryTag name="123"/>
                                <SearchHistoryTag name="123"/>
                                <SearchHistoryTag name="123"/>
                                <SearchHistoryTag name="123"/>

                            </div>

                            <div className="flex items-center justify-between">
                                <div className="font-medium">热搜</div>
                            </div>
                            <div className="flex items-center justify-between">
                                {
                                    ["1 1231", "2 1231231"].map((item, index) => {
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
            <div className="rightNavigate flex items-center justify-between w-[500px] h-full">
                <img src="/544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp"
                     className="avator w-[40px] h-[40px] rounded-full"/>
                <NavigateRightCategory name={"大会员"} icon={RiVipCrown2Line}/>
                <NavigateRightCategory name={"消息"} icon={MdOutlineMailOutline}/>
                <NavigateRightCategory name={"动态"} icon={TbWindmill}/>
                <NavigateRightCategory name={"收藏"} icon={FaRegStar}/>
                <NavigateRightCategory name={"历史"} icon={LiaHistorySolid}/>
                <NavigateRightCategory name={"创作中心"} icon={TbBulb}/>


                <UploadButton/>
            </div>
        </div>

    )
}
