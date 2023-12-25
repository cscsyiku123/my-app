import Navigate from "@/components/navigate";
import React, {ReactElement, ReactNode, useState} from "react";
import {useRouter} from "next/router";
import {CatalogTagData} from "@/lib/entitiy/catalogTagData";
import {UploadButton} from "@/components/uploadButton";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {IoDocumentText} from "react-icons/io5";
import Layout from "@/pages/layout";
import Link from "next/link";
function PlatformLeftSiderBar(props: { catalogData: CatalogTagData[] }) {
    const [showChildren, setShowChildren] = useState(Array(props.catalogData.length).fill(false));
    return (
        <div className="leftSiderBar flex flex-col items-center w-[200px] overflow-auto  bg-white  fixed left-0 h-full hidden xl:flex">
            <UploadButton/>
            {
                props.catalogData.map((item, index) => {
                    return (
                        <Link href={item.link}>
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
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default function PlatformLayout({children}: { children: ReactElement }) {
    const router = useRouter()
    let catalogData = [new CatalogTagData(1, "首页", "/platform/home", IoDocumentText, []),
        new CatalogTagData(2, "内容管理", "", IoDocumentText,
            [new CatalogTagData(1, "稿件管理", "", IoDocumentText, []),
                new CatalogTagData(1, "申诉管理", "", IoDocumentText, []),
                new CatalogTagData(1, "字幕管理", "", IoDocumentText, [])]),
        new CatalogTagData(3, "互动管理", "", IoDocumentText,
            [new CatalogTagData(1, "评论管理", "", IoDocumentText, []),
                new CatalogTagData(1, "弹幕管理", "", IoDocumentText, [])])
    ];
    return (
        <Layout>
            <div className="flex justify-center flex-shrink-0 min-w-[1280px] bg-gray-50 min-h-[calc(100vh-85px)] w-full">
                <PlatformLeftSiderBar catalogData={catalogData}/>
                {children}
            </div>
        </Layout>
    )
}
