import {NextPageWithLayout} from "@/pages/_app";
import React, {ReactElement} from "react";
import PlatformLayout from "@/pages/platform/platformLayout";




const Page: NextPageWithLayout = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
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
        <PlatformLayout>
            {page}
        </PlatformLayout>
    )
}

export default Page
