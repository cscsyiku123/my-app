import {NextPageWithLayout} from "@/pages/_app";
import React, {ReactElement, useState} from "react";
import Layout from "@/pages/layout";
import {CatalogData} from "@/lib/entitiy/catalogData";
import {IoDocumentText} from "react-icons/io5";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";

const Page: NextPageWithLayout = () => {
    const [showChildren, setShowChildren] = useState(false);
    return (
        <>
            <div className="leftSiderBar fixed left-0 flex flex-col items-center w-[150px] overflow-auto">
                <div className=" w-[100px] h-[30px] bg-sky-400 ">投稿</div>
                {
                    [new CatalogData(1, "首页", "", IoDocumentText, [new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, [])]),
                        new CatalogData(1, "首页", "", IoDocumentText, [new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, []), new CatalogData(1, "首页", "", IoDocumentText, [])])
                    ].map((item, index) => {
                        return (
                            <div className="w-full flex flex-col items-center">
                                <div className="flex items-center  h-full hover:bg-gray-100 " key={index}
                                     onClick={() => setShowChildren((o) => !o)}>
                                    <item.icon className="w-[50px]"/>
                                    <p className="text-gray-700 w-[75px]">{item.name}</p>
                                    {item.children.length > 0 && <MdOutlineKeyboardArrowDown
                                        className={`transition-all duration-500 ${!showChildren && "rotate-180"}`}/>}
                                </div>
                                {item.children.length > 0 &&
                                    showChildren && <div
                                        className="flex flex-col items-center justify-end  transition-all duration-1000">
                                        {
                                            item.children.map((item, index) => {
                                                return (
                                                    <p className="text-gray-700 w-[75px]">{item.name}</p>
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
        </>
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
