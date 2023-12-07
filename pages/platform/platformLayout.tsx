import Navigate from "@/components/navigate";
import React, {ReactElement, ReactNode, useState} from "react";
import {useRouter} from "next/router";
import {CatalogData} from "@/lib/entitiy/catalogData";
import {UploadButton} from "@/components/uploadButton";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {IoDocumentText} from "react-icons/io5";
import Layout from "@/pages/layout";
function PlatformLeftSiderBar(props: { catalogData: CatalogData[] }) {
    const [showChildren, setShowChildren] = useState(Array(props.catalogData.length).fill(false));
    return (
        <div className="leftSiderBar fixed left-0 top-[80px] flex flex-col items-center w-[200px] overflow-auto h-full bg-white">
            <UploadButton/>
            {
                props.catalogData.map((item, index) => {
                    return (
                        <div className="mt-3 w-full flex flex-col  text-[15px] text-gray-800" key={index}>
                            <div className="flex items-center h-[50px] hover:bg-gray-100  p-5 gap-3" key={index}
                                 onClick={() => setShowChildren((o) => {
                                     let temp = [...o];
                                     temp[index] = !temp[index];
                                     return temp;
                                 })}>
                                <item.icon className="w-[25px] h-[25px]"/>
                                <p className="text-gray-700 w-[75px]">{item.name}</p>
                                {item.children.length > 0 && <MdOutlineKeyboardArrowDown
                                    className={`transition-all w-[22px] h-[22px] text-gray-400 duration-500 ${!showChildren[index] && "rotate-180"}`}/>}
                            </div>
                            {item.children.length > 0 && <div
                                className={`w-full  transition-all duration-500 max-h-0  overflow-hidden ease-out  text-gray-400 font-normal`}
                                style={{
                                    maxHeight: `${showChildren[index] ? `calc(${item.children.length}*62px)` : 0}`
                                }}
                            >
                                {
                                    item.children.map((item, index) => {
                                        return (
                                            <div
                                                className="w-full h-[50px] hover:bg-gray-100  mt-3 flex items-center pl-[50px]" key={index}>
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
    )
}
export default function PlatformLayout({children}: { children: ReactElement }) {
    const router = useRouter()
    let catalogData = [new CatalogData(1, "首页", "", IoDocumentText, []),
        new CatalogData(2, "内容管理", "", IoDocumentText,
            [new CatalogData(1, "稿件管理", "", IoDocumentText, []),
                new CatalogData(1, "申诉管理", "", IoDocumentText, []),
                new CatalogData(1, "字幕管理", "", IoDocumentText, [])]),
        new CatalogData(3, "互动管理", "", IoDocumentText,
            [new CatalogData(1, "评论管理", "", IoDocumentText, []),
                new CatalogData(1, "弹幕管理", "", IoDocumentText, [])])
    ];
    return (
        <Layout>
            <div className="flex h-full md:ml-[250px]">
                <PlatformLeftSiderBar catalogData={catalogData}/>
                {children}
            </div>
        </Layout>
    )
}
