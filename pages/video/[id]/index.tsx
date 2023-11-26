import React, {ReactElement} from "react";
import Layout from "@/pages/layout";
import {NextPageWithLayout} from "@/pages/_app";
import Head from "next/head";
import {CategoryTag} from "@/components/categoryTag";
import {useRouter} from "next/router";
import {useParams, usePathname, useSearchParams} from "next/navigation";

const Page: NextPageWithLayout = () => {
    let router = useRouter();
    let id = router.query.id;
    console.log(router)
    console.log(id)
    const pathname = usePathname()
    const searchParams = useSearchParams()
    console.log(pathname)
    console.log(searchParams?.values())
    let params = useParams();
    console.log(params)
    return (
        <>
            <Head>
                <title>video</title>
                <meta name="description" content="这是一个video页面"/>
            </Head>
            <div className="w-full h-full flex items-center justify-between">
                <div className="leftVideo w-[1200px]">
                    <p className="videoTitle text-[30px] ">财务自由的本质&普通人注定无法实现财务自由</p>
                    <div
                        className="videoDescription text-[16px] mt-2  text-gray-500 flex items-center justify-between w-[450px]">
                        <div>6.1 万</div>
                        <div>6023</div>
                        <div>2023-11-11 10:25:59</div>
                        <div>未经作者授权，禁止转载</div>
                    </div>
                    <div className="videoMain shadow-md w-[1000px] ">
                        <video></video>
                        <div className="w-full h-[50px] flex items-center justify-between">
                            <p>67 人正在看，已装填517条弹幕</p>
                            <div className="barrang flex items-center justify-between w-[700px]">
                                <div className="w-[600px]">
                                    <p>A</p>
                                    <input className="rounded-lg bg-gray-300  focus:outline-none bg-transparent "
                                           placeholder="发个友善弹幕"/>
                                    <a>{`弹幕礼仪>`}</a>
                                </div>
                                <input type="button" className="bg-blue-400" value="发送"/>
                            </div>
                        </div>
                        <div className="bg-bottom border-solid flex items-center justify-between w-[300px]">
                            <div>2544</div>
                            <div>2544</div>
                            <div>2544</div>
                            <div>2544</div>
                        </div>
                        <div className="videoDescription">
                            主要包含三个部分的内容：财务自由的本质、财务自由者过多的危害，以及拿什么替代财务自由
                        </div>
                        <div className="videoTag">q
                            <CategoryTag tagName="开麦职场人"/>
                        </div>
                    </div>
                    <div className="comment ">
                        <div className="commentStatic flex items-center justify-between">
                            <div className="flex items-center ">
                                <p className="text-[18px] font-bold">评论</p>
                                <p className="text-[12px] text-gray-300 ml-1">466</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <a className="text-[18px] font-bold">最热</a>
                                <p>|</p>
                                <a className="text-[12px] text-gray-300">最新</a>
                            </div>
                        </div>
                        <div className="commentPost flex items-center justify-between w-full">
                            <input className=""/>
                            <input type="button" className="bg-blue-400" value="发布"/>
                        </div>
                        <div className="commentSection flex items-center justify-between w-full">
                            <div className="userComment flex items-center justify-between w-full">
                                <div>头像</div>
                                <div
                                    className="comment flex flex-col items-start justify-between bg-bottom border-solid">
                                    <div className="">用户名</div>
                                    <div className="comment">
                                        置顶我们建了个群，重点讨论如何提升个人核心通用能力：思维力、学习力、人脉力。以及解决工作三年以上会碰到的实际问题，如缺乏深度思考、知识零散不成体系、晋升瓶颈、沟通表达不清等。如果你想要进群的话，可以加微信号youcore27，群是免费，但是谢绝广告和干扰
                                    </div>
                                    <div className="commentInfo flex items-start justify-between">
                                        <p>2023-11-15 13:27</p>
                                        <p>3</p>
                                        <p>回复</p>
                                    </div>

                                    <div className="commentReplySection flex flex-col items-start justify-between ">
                                        <div className="commentReply flex items-center justify-start">
                                            <div className="">用户名</div>
                                            <div className="comment">
                                                置顶我们建了个群，重点讨论如何提升个人核心通用能力：思维力、学习力、人脉力。以及解决工作三年以上会碰到的实际问题，如缺乏深度思考、知识零散不成体系、晋升瓶颈、沟通表达不清等。如果你想要进群的话，可以加微信号youcore27，群是免费，但是谢绝广告和干扰
                                            </div>
                                        </div>
                                        <div className="commentInfo flex items-center justify-between text-gray-300">
                                            <p>2023-11-15 13:27</p>
                                            <p>3</p>
                                            <p>回复</p>
                                        </div>
                                    </div>
                                    <div>共18条回复,点击查看</div>
                                    <div>共2页,1 2 下一页</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSiderBar ml-5">
                    <div className="author flex items-center justify-between">
                        <div>头像</div>
                        <div className={"flex flex-col items-center justify-between "}>
                            <div>用户名</div>
                            <div
                                className="text-gray-400 text-[11px]">深耕核心力（思维力、学习力、人脉力）训练8年，可加微信号youcore12
                            </div>
                            <div className="flex items-center justify-between">
                                <input type="button" value=""/>
                                <input type="button" value=""/>
                            </div>
                        </div>
                    </div>
                    <div className="barrageList  w-[600px]">
                        <div className="bg-gray-200 rounded-lg text-[18px]  h-[50px] flex items-center pl-5">
                            <p className="">弹幕列表</p>
                        </div>
                        <div className="overflow-y-scroll h-[500px] pb-2 pl-2">
                            <table className="text-[16px] text-gray-500 w-full table-fixed ">
                                <thead>
                                <tr>
                                    <td className="w-[70px]">时间</td>
                                    <td className="w-[350px]">弹幕内容</td>
                                    <td className="w-[100px]">发送时间</td>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    Array(60).fill(1).map((item, index) => {
                                        return (
                                            <tr>
                                                <td>01:56</td>
                                                <td className="text-gray-800 line-clamp-1	">12311313131313131313131312313131231321312321313313131331231313131313133</td>
                                                <td>11-12 02:34</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="recommand flex flex-col ">
                        <div className="font-bold flex items-center justify-between">
                            <p>接下来播放</p>
                            <p>自动联播</p>
                        </div>
                        <div className=" border-b border-solid border-gray-300">
                            <div className="videoBriefTag flex justify-between items-center">
                                <img src="/example.png" className="rounded-lg object-cover w-[180px] h-[100px]"/>
                                <div className="flex flex-col items-center justify-between">
                                    <div>长大后发现，易中天这段讽刺"统治阶层”的采访，说的全</div>
                                    <div>123</div>
                                    <div>123</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
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

