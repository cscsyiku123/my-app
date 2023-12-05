import {NextPageWithLayout} from "@/pages/_app";
import React, {ReactElement, useState} from "react";
import Layout from "@/pages/layout";
import {CatalogData} from "@/lib/entitiy/catalogData";
import {IoDocumentText} from "react-icons/io5";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {UploadButton} from "@/components/uploadButton";
import PlatformLayout from "@/pages/platform/platformLayout";




const Page: NextPageWithLayout = () => {
    let navigate = ["视频投稿","专栏投稿", "互动视频投稿"];

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="h-full  flex items-center justify-center w-[1000px] mt-2 ">
                <div className=" bg-white w-full p-5 h-full ">
                    <div className="inNavigate flex border-b border-gray-300 items-center gap-10 h-[50px] text-[16px] text-gray-600 w-full  ">
                        {
                            navigate.map((item, index) => {
                                return (
                                    <div className="h-full"
                                            key={index}
                                             style={{
                                                    borderBottom: "3px solid rgb(56 189 248)",
                                                    // color: "#FF6699"
                                             }}
                                    >{item}</div>
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
        <PlatformLayout>
            {page}
        </PlatformLayout>
    )
}

export default Page
