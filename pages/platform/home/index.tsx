import {NextPageWithLayout} from "@/pages/_app";
import React, {ReactElement, useState} from "react";
import Layout from "@/pages/layout";
import {CatalogData} from "@/lib/entitiy/catalogData";
import {IoDocumentText} from "react-icons/io5";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {UploadButton} from "@/components/uploadButton";

const Page: NextPageWithLayout = () => {
    let catalogData = [new CatalogData(1, "首页", "", IoDocumentText, []),
        new CatalogData(2, "内容管理", "", IoDocumentText,
            [new CatalogData(1, "稿件管理", "", IoDocumentText, []),
                new CatalogData(1, "申诉管理", "", IoDocumentText, []),
                new CatalogData(1, "字幕管理", "", IoDocumentText, [])]),
        new CatalogData(3, "互动管理", "", IoDocumentText,
            [new CatalogData(1, "评论管理", "", IoDocumentText, []),
                new CatalogData(1, "弹幕管理", "", IoDocumentText, [])])
    ];
    const [showChildren, setShowChildren] = useState(Array(catalogData.length).fill(false));
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div
                className="leftSiderBar fixed left-0 top-[80px] flex flex-col items-center w-[150px] overflow-auto h-full bg-white">
                <UploadButton/>
                {
                    catalogData.map((item, index) => {
                        return (
                            <div className="mt-3 w-full flex flex-col  ">
                                <div className="flex items-center h-[50px] hover:bg-gray-100 " key={index}
                                     onClick={() => setShowChildren((o) => {
                                            let temp = [...o];
                                            temp[index] = !temp[index];
                                            console.log(temp)
                                            return temp;
                                     })}>
                                    <item.icon className="w-[50px]"/>
                                    <p className="text-gray-700 w-[75px]">{item.name}</p>
                                    {item.children.length > 0 && <MdOutlineKeyboardArrowDown
                                        className={`transition-all w-[22px] h-[22px] text-gray-400 duration-500 ${!showChildren[index] && "rotate-180"}`}/>}
                                </div>
                                {item.children.length > 0 && <div
                                    className={`w-full  transition-all duration-500 max-h-0  overflow-hidden ease-out `}
                                    style={{
                                        maxHeight: `${showChildren[index]? `calc(${item.children.length}*62px)` : 0}`
                                    }}
                                >
                                    {
                                        item.children.map((item, index) => {
                                            return (
                                                <div
                                                    className="w-full h-[50px] hover:bg-gray-100  mt-3 flex items-center pl-[50px]">
                                                    {item.name}
                                                </div>
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
