import {NextPageWithLayout} from "@/pages/_app";
import React, {ReactElement, useEffect, useState} from "react";
import Layout from "@/pages/layout";
import {CatalogData} from "@/lib/entitiy/catalogData";
import {IoDocumentText} from "react-icons/io5";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

const Page: NextPageWithLayout = () => {
    useEffect(() => {
        console.log(123)
    }, [])
    const [showChildren, setShowChildren] = useState(false);
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div
                className="leftSiderBar fixed left-0 top-[100px] flex flex-col items-center w-[150px] overflow-auto h-full bg-white">
                <div className=" w-[100px] h-[30px] bg-sky-400 ">投稿</div>
                {
                    [new CatalogData(1, "首页", "", IoDocumentText, [new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, [])]),
                        new CatalogData(1, "首页", "", IoDocumentText, [new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, [])])
                    ].map((item, index) => {
                        return (
                            <div className="mt-3 w-full flex flex-col items-center">
                                <div className="flex items-center  h-full hover:bg-gray-100 " key={index}
                                     onClick={() => setShowChildren((o) => !o)}>
                                    <item.icon className="w-[50px]"/>
                                    <p className="text-gray-700 w-[75px]">{item.name}</p>
                                    {item.children.length > 0 && <MdOutlineKeyboardArrowDown
                                        className={`transition-all w-[22px] h-[22px] text-gray-400 duration-500 ${!showChildren && "rotate-180"}`}/>}
                                </div>
                                {item.children.length > 0 &&
                                     <div
                                        className={` pl-[25px] flex flex-col items-end justify-start  transition-all duration-500 max-h-0 overflow-hidden ease-out ${showChildren && "max-h-[300px]"}`}>
                                        {
                                            item.children.map((item, index) => {
                                                return (
                                                    <p className="mt-3 text-gray-500 w-[75px]">{item.name}</p>
                                                )
                                            })
                                        }
                                    </div>
                                }
                            </div>


                        )
                    })
                }
            </div>
            <div className="h-full  flex items-center justify-center w-[1000px] mt-2 ">
                <div className="videoData bg-white w-full p-5">
                    <div className="flex items-center justify-between text-[18px] mb-2">
                        <div className=" flex items-center justify-between w-[400px]">
                            <div className="font-bold text-cyan-500">视频数据</div>
                            <div className="">专栏数据</div>
                            <div className="text-gray-300">|</div>
                            <div className="text-green-400">电磁力 Lv.2</div>
                        </div>
                        <div className="text-gray-400">{"每日中午12点更新昨日数据 >"}</div>
                    </div>
                    <div className="flex items-center justify-around flex-wrap">
                        {
                            Array(6).fill(1).map((item, index) => {
                                return (
                                    <div className="rounded-xl bg-blue-100 w-[280px] p-5 mt-2">
                                        <div className="text-gray-400 text-[15px]">净增粉丝</div>
                                        <div className="text-[25px] text-cyan-500 font-bold">6</div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
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
