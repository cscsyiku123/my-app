import React, {ReactElement, useEffect, useState} from "react";
import Layout from "@/pages/layout";
import {NextPageWithLayout} from "@/pages/_app";
import {CategoryTag} from "@/components/categoryTag";
import {useRouter} from "next/router";
import {MdFlashOn, MdOutlineHdrAuto, MdOutlineKeyboardArrowDown} from "react-icons/md";
import {PiProhibitBold} from "react-icons/pi";
import {CiPlay1} from "react-icons/ci";
import {LiaCommentDotsSolid} from "react-icons/lia";
import {RiFontColor, RiMore2Line} from "react-icons/ri";
import {TiArrowForward} from "react-icons/ti";
import {FaStar} from "react-icons/fa";
import {HiMiniCurrencyYen} from "react-icons/hi2";
import {BiSolidLike} from "react-icons/bi";
import {IoAddSharp} from "react-icons/io5";
import VideoPlayer from "@/components/videoPlayer";

class Comment extends React.Component {
    render() {
        return <div className="userComment flex items-start justify-between w-full gap-3  border-b-[1.8px] pb-5  ">
            <img src="/544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp"
                 className="avator w-[50px] h-[50px] rounded-full"/>
            <div
                className="comment flex flex-col items-start justify-between bg-bottom border-solid gap-3">
                <div className=" text-[20px]">用户名</div>
                <div className="comment text-[18px]">
                    置顶我们建了个群，重点讨论如何提升个人核心通用能力：思维力、学习力、人脉力。以及解决工作三年以上会碰到的实际问题，如缺乏深度思考、知识零散不成体系、晋升瓶颈、沟通表达不清等。如果你想要进群的话，可以加微信号youcore27，群是免费，但是谢绝广告和干扰
                </div>
                <div className="commentInfo flex items-start justify-between text-gray-400 font-normal gap-3">
                    <p>2023-11-15 13:27</p>
                    <p>3</p>
                    <p>回复</p>
                </div>

                <div className="commentReplySection flex flex-col items-start justify-between ">
                    <div className="commentReply flex items-start justify-start gap-3">
                        <img src="/544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp"
                             className="avator w-[40px] h-[40px] rounded-full"/>
                        <div className="comment mb-3">
                            置顶我们建了个群，重点讨论如何提升个人核心通用能力：思维力、学习力、人脉力。以及解决工作三年以上会碰到的实际问题，如缺乏深度思考、知识零散不成体系、晋升瓶颈、沟通表达不清等。如果你想要进群的话，可以加微信号youcore27，群是免费，但是谢绝广告和干扰
                        </div>
                    </div>
                    <div className="commentInfo flex items-start justify-between text-gray-400 font-normal gap-3">
                        <p>2023-11-15 13:27</p>
                        <p>3</p>
                        <p>回复</p>
                    </div>
                </div>
                <div>共18条回复,点击查看</div>
                <div>共2页,1 2 下一页</div>
            </div>
        </div>;
    }
}

const Page: NextPageWithLayout = () => {
    let router = useRouter();
    useEffect(() => {
        var {isReady, query: {videoId}} = router
        if (isReady) {
            console.log(videoId)
        }
    }, [router.query]);

    const [showBarrageListDetail, setShowBarrageListDetail] = useState(false)


    return (
        <>
            <div className="w-full h-full flex items-start justify-between">
                <div className="leftVideo w-[1400px]">
                    <div className="h-[100px]">
                        <p className="videoTitle text-[30px] ">财务自由的本质&普通人注定无法实现财务自由</p>
                        <div
                            className="videoDescription text-[16px] mt-3  text-gray-500 flex items-center justify-between w-[550px]">
                            <CiPlay1/>
                            <div>6.1 万</div>
                            <LiaCommentDotsSolid/>
                            <div>6023</div>
                            <div>2023-11-11 10:25:59</div>
                            <PiProhibitBold className="text-red-500"/>
                            <div> 未经作者授权，禁止转载</div>
                        </div>
                    </div>
                    <div className="videoMain  w-full border-b mt-5  z-10 ">
                        <div className="w-full h-[750px]  bg-zinc-950 ">
                            <VideoPlayer></VideoPlayer>
                        </div>
                        <div className="w-full h-[75px] flex items-center justify-between shadow-lg p-5 text-[18px] text-gray-400">
                            <p>67 人正在看，已装填517条弹幕</p>
                            <div
                                className="barrang flex items-center justify-between w-[700px] h-[55px] rounded-lg bg-gray-200  ">
                                <div className="w-[600px] flex items-center justify-between h-full ">
                                    <RiFontColor className="w-[25px] h-[25px] "/>
                                    <input className="rounded-lg focus:outline-none bg-transparent w-[450px] h-full"
                                           placeholder="发个友善弹幕见证下当下"/>
                                    <div className="text-gray-400 hover:text-sky-400">{`弹幕礼仪>`}</div>
                                </div>
                                <input type="button" className="bg-sky-400 h-full w-[80px] rounded-r-lg text-white"
                                       value="发送"/>
                            </div>
                        </div>
                        <div
                            className=" border-solid flex items-center justify-start gap-5   h-[100px] border-b text-[20px] text-gray-500 ">
                            <BiSolidLike className="w-[50px] h-[50px]"/>
                            <div>2544</div>
                            <HiMiniCurrencyYen className="w-[50px] h-[50px]"/>
                            <div>2544</div>
                            <FaStar className="w-[50px] h-[50px]"/>
                            <div>2544</div>
                            <TiArrowForward className="w-[50px] h-[50px]"/>
                            <div>2544</div>
                        </div>
                        <div className="videoDescription my-5 text-gray-800 text-[18px]">
                            主要包含三个部分的内容：财务自由的本质、财务自由者过多的危害，以及拿什么替代财务自由
                        </div>
                        <div className="videoTag flex items-center flex-wrap gap-3">
                            <CategoryTag tagName="开麦职场人"/>
                            <CategoryTag tagName="开麦职场人"/>
                            <CategoryTag tagName="开麦职场人"/>
                            <CategoryTag tagName="开麦职场人"/>
                        </div>
                    </div>
                    <div className="comment">
                        <div className="commentStatic flex items-center gap-10 my-10">
                            <div className="flex items-center ">
                                <p className="text-[30px]  ">评论</p>
                                <p className="text-[15px] text-gray-400 ml-1">466</p>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                                <a className="text-[20px] hover:text-sky-400">最热</a>
                                <p>|</p>
                                <a className="text-[20px] text-gray-300 hover:text-sky-400">最新</a>
                            </div>
                        </div>
                        <div className="commentPost flex items-center justify-between w-full ">
                            <img src="/544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp"
                                 className="avator w-[50px] h-[50px] rounded-full"/>
                            <div
                                className=" h-[50px] flex items-center justify-between gap-3 box-border  hover:h-[80px] transition-all duration-1000 group">
                                <textarea className=" rounded-lg bg-gray-200 h-full group-hover:outline group-hover:outline-gray-400  focus:outline focus:outline-gray-400  w-[1070px]  focus:bg-white hover:bg-white resize-none	p-2 " placeholder="只是一直在等你"/>
                                <input type="button" className="bg-sky-400 w-[250px] h-full rounded-lg text-white" value="发布"/>
                            </div>
                        </div>
                        <div className="commentSection flex flex-col items-center w-full mt-10 gap-3 ">

                            {
                                Array(10).fill(1).map((item, index) => {
                                    return (
                                        <Comment key={index}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="rightSiderBar ml-5">
                    <div className="author flex items-center gap-5 h-[100px]">
                        <img src="/544c89e68f2b1f12ffcbb8b3c062a3328e8692d9.jpg@92w_92h.webp"
                             className="avator w-[50px] h-[50px] rounded-full"/>
                        <div className={"flex flex-col items-start justify-between "}>
                            <div className="text-[20px]">用户名</div>
                            <div
                                className="text-gray-400 text-[15px] line-clamp-1 w-[400px]">深耕核心力（思维力、学习力、人脉力）训练8年，可加微信1231313112313号youcore12
                            </div>
                            <div className="flex items-center justify-between w-[400px] mt-3">
                                <div
                                    className="flex items-center justify-center gap-3  text-[#FF6699]  border-[#FF6699] border rounded-lg px-10 py-1.5 text-[20px]">
                                    <MdFlashOn/>
                                    <p>充电</p>
                                </div>
                                <div
                                    className="flex items-center justify-center gap-3 rounded-lg px-10 py-1.5 bg-sky-400 text-white text-[20px]">
                                    <IoAddSharp/>
                                    <p>关注</p>
                                    <p>5.6万</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="barrageList  w-[500px] my-5 ">
                        <div
                            className="bg-gray-200 rounded-lg text-[18px]  h-[50px] flex items-center px-5 justify-between"
                            onClick={() => setShowBarrageListDetail((o) => !o)}>
                            <div className="flex items-center">
                                <p className="">弹幕列表</p>
                                <RiMore2Line/>
                            </div>


                            <MdOutlineKeyboardArrowDown
                                className={`transition-all w-[22px] h-[22px] text-gray-400 duration-500 ${!showBarrageListDetail && "rotate-180"}`}/>
                        </div>
                        <div
                            className={` pl-2 transition-all duration-500 max-h-0 overflow-hidden ease-out ${showBarrageListDetail && `max-h-[500px] overflow-y-scroll"}`}`}

                        >
                            <table className="text-[16px] text-gray-500 w-full table-fixed ">
                                <thead>
                                <tr>
                                    <th className="w-[70px]">时间</th>
                                    <th className="w-[350px]">弹幕内容</th>
                                    <th className="w-[100px]">发送时间</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    Array(60).fill(1).map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>01:56</td>
                                                <td className="text-gray-800 w-[350px] line-clamp-1	break-all">12311313131313131313131312313131231321312321313313131331231313131313133</td>
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
                        <div className=" border-b border-solid border-gray-300 pb-5 flex flex-col gap-3">
                            {
                                Array(6).fill(1).map((item, index) => {
                                    return (
                                        <div className="videoBriefTag flex justify-start items-center gap-5">
                                            <img src="/example.png"
                                                 className="rounded-lg object-cover w-[200px] h-[100px]"/>
                                            <div className="flex flex-col items-start justify-between w-[250px] ">
                                                <div
                                                    className="line-clamp-2">长大后发现，易中天这段讽刺"统治阶层”的采访，说的全12311212313313
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <MdOutlineHdrAuto/>
                                                    <p>123</p>
                                                </div>
                                                <div className="flex items-center gap-3 text-gray-400">
                                                    <CiPlay1/>
                                                    <div>6.1 万</div>
                                                    <LiaCommentDotsSolid/>
                                                    <div>6023</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

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

