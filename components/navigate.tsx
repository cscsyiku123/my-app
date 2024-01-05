import React, {useState} from "react";
import {MdOutlineKeyboardArrowDown, MdOutlineMailOutline} from "react-icons/md";
import {IoIosSearch} from "react-icons/io";
import {IconType} from "react-icons/lib";
import {RiVipCrown2Line} from "react-icons/ri";
import {TbBulb, TbWindmill} from "react-icons/tb";
import {FaRegStar} from "react-icons/fa";
import {LiaHistorySolid} from "react-icons/lia";
import {UploadButton} from "@/components/uploadButton";
import {useRouter} from "next/router";
import useNextStore from "@/lib/store/store";
import {useUserStore} from "@/lib/store/user.store";

function SearchHistoryTag(props: { name: string }) {
    return (
        <div
            className="flex items-center justify-center bg-gray-100 rounded-lg hover:text-blue-300  px-2 text-[14px] h-[25px] ">{props.name}</div>
    )
}

function NavigateRightCategory(props: { name: string, icon: IconType }) {
    return <div className="flex flex-col items-center h-full  justify-center  ">
        <props.icon className="w-[18px] h-[18px] scale-125 text-gray-700"/>
        <p className="text-gray-350 font-semibold  text-[12px] text-gray-500 hidden xl:block">{props.name}</p>
    </div>;
}


export default function () {
    const [searchDetailShow, setSearchDetailShow] = useState(false)
    const router = useRouter()
    let userVo = useNextStore(useUserStore, (state) => state.user);
    let {actionLogout} = useUserStore();
    return (
        <div className="navigate w-full  z-50 bg-white shadow-md flex items-center justify-between h-[75px]  sticky  top-0   ">
            <div className="leftNavigate flex items-center justify-around min-w-[450px] w-[700px]  text-[16px]  cursor-pointer  ">
                <div className=" group flex items-center relative "
                     onClick={() => {
                         router.push('/')
                     }}
                >
                    <p>首页</p>
                    <MdOutlineKeyboardArrowDown className="transition-all duration-500 group-hover:rotate-180"/>
                    <div
                        className="z-10 absolute -bottom-[75px] transition-all duration-500 opacity-0  group-hover:opacity-100 w-[500px] p-5 border border-gray-200 border-solid shadow bg-white">
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
            <div className="searchTopBar  h-[40px] min-w-[300px] w-[700px] bg-gray-50 rounded-lg flex items-center justify-around hover:bg-white relative border-2 border-solid p-1 transition-colors duration-700">
                <input
                    className="focus:bg-gray-200 rounded-[5px] w-full h-full bg-transparent  focus:outline-none  placeholder-gray-300 text-gray-500  w-[250px] font-light"
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
            <div className="rightNavigate flex items-center justify-between min-w-[500px]  w-[500px] h-full">
                {
                    userVo?.userId &&
                    <div className={' flex group relative'}>
                        <img src={userVo.avatarImageLink} className="avator z-10 w-[40px] h-[40px] rounded-full group-hover:scale-[2]  group-hover:translate-y-8 transition-all "/>
                        <div className=" absolute top-[70px] -right-[150px]  transition delay-500 hidden group-hover:flex group-hover:flex gap-1 opacity-0  group-hover:opacity-100 group-hover:opacity-100 w-[350px] p-5 border border-gray-200 border-solid shadow bg-white flex justify-center flex-col items-center">
                            <div className={"text-[#FF6699] font-medium"}>{userVo?.userName}</div>
                            <div className={'bg-pink-400 text-white text-[10px] rounded-lg px-2'}>年度大会员</div>
                            <div className={'flex items-center justify-between gap-20'}>
                                <div className={'flex flex-col items-center cursor-pointer group hover:text-sky-400'}>
                                    <div className={'font-medium text-[18px]'}>3</div>
                                    <div className={'text-gray-500 text-[12px] group-hover:text-sky-400'}>关注</div>
                                </div>
                                <div className={'flex flex-col items-center '}>
                                    <div className={'font-medium text-[18px]'}>3</div>
                                    <div className={'text-gray-500 text-[12px]'}>关注</div>
                                </div>
                                <div className={'flex flex-col items-center '}>
                                    <div className={'font-medium text-[18px]'}>3</div>
                                    <div className={'text-gray-500 text-[12px]'}>关注</div>
                                </div>
                            </div>
                            <div className={'hover:bg-gray-200 w-full text-[16px] px-5    rounded-lg py-1 font-medium text-gray-600 transition-all duration-300 cursor-pointer '}>个人中心</div>
                            <div className={'hover:bg-gray-200 w-full text-[16px] px-5    rounded-lg py-1 font-medium text-gray-600 cursor-pointer'}>投稿管理</div>
                            <div className={'hover:bg-gray-200 w-full text-[16px] px-5    rounded-lg py-1 font-medium text-gray-600 cursor-pointer'}>推荐服务</div>
                            <div className={'border-t  w-full'}></div>
                            <div className={'hover:bg-gray-200 w-full text-[16px] px-5   rounded-lg py-1 font-medium text-gray-600 cursor-pointer'} onClick={()=>actionLogout()}>退出登录</div>
                        </div>
                    </div>
                    ||
                    <div className="avator cursor-pointer w-[40px] h-[40px] rounded-full bg-sky-500 text-center text-white flex items-center justify-center" onClick={(e)=>{
                        e.stopPropagation()
                        useUserStore.setState({openAuthOverlay:true})
                    }}>登录</div>

                }
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
