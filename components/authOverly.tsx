import {NextPageWithLayout} from "@/pages/_app";
import useNextStore from "@/lib/store/store";
import {useUserStore} from "@/lib/store/user.store";
import React, {ReactElement, useEffect, useState} from "react";

const Page: NextPageWithLayout = () => {
    const {accessToken,user} = useNextStore(useUserStore, (state) => state);
    let {actionLogin} = useUserStore();

    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        actionLogin({
            signInType: "0", account: account, password: password,
            userId: 0
        })
    }
    useEffect(()=>{
        document.addEventListener("click",function (e) {
          if (e.target === document.getElementById("authOverlay")){
              useUserStore.setState({openAuthOverlay: false})
          }
        })

    },[])



    return (
        <div id="authOverlay" className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black bg-opacity-50">
            <div className="signIn relative bg-white w-full max-w-[900px] min-w-[800px] min-h-[400px] p-4 rounded-lg flex items-center justify-center gap-10 ">
                <div className="flex flex-col items-center justify-start  gap-5 border-r px-10 h-[250px]">
                    <div className={"text-[18px] font-medium text-gray-900"}>扫描二维码登录</div>
                    <div className={"rounded-lg border w-[160px] h-[160px]"}>二维码</div>
                    <div className={""}>请使用xxxx扫码登录</div>

                </div>
                <div className={" flex flex-col items-center justify-start gap-5 w-[60%] h-[250px]"}>
                    <div className="flex  text-[18px] font-medium text-gray-900 ">
                        <div className={"border-r px-5 cursor-pointer hover:text-sky-600"}>密码登录</div>
                        <div className={"px-5 cursor-pointer hover:text-sky-600" }>短信登录</div>
                    </div>

                    <div className={"w-full flex flex-col items-center gap-3"}>
                        <div className={"w-[80%]"}>
                            <div className={"border flex rounded-t-lg w-full items-center"}>
                                <div className={"py-2 px-4  text-[14px] font"}>账号</div>
                                <input placeholder={"请输入账号"} className={"w-[60%] placeholder-gray-300 focus:outline-none border-none  bg-transparent"} onChange={(e)=>setAccount(e.target.value)} value={account}/>
                            </div>
                            <div className={"border-b border-x flex rounded-b-lg items-center "}>
                                <div className={"py-2 px-4  text-[14px] font"}>密码</div>
                                <input type={"password"} placeholder={"请输入密码"} className={"w-[60%] placeholder-gray-300 focus:outline-none border-none  bg-transparent"} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                                <div className={"text-sky-400 text-[14px] font-semibold"}>忘记密码？</div>
                            </div>
                        </div>
                        <div className={"flex gap-3  w-[80%]  "}>
                            <input type={"button"} value={"注册"} className={"rounded-lg hover:bg-gray-50 py-2 text-center flex-shrink border flex-grow cursor-pointer"}/>
                            <input type={"button"} value={"登录"} className={"text-white rounded-lg hover:bg-sky-400 bg-sky-300 text-center flex-grow cursor-pointer"} onClick={()=>login()}/>
                        </div>
                        <div className={"text-gray-700 text-[14px] flex flex-col items-center gap-2"}>
                            <div>其他方式登录</div>
                            <div className={"flex gap-10"}>
                                <div className={"flex items-center justify-between gap-2 cursor-pointer"}>
                                    <img src={"/weixin.png "} className={"w-[26px] h-[26px]"}/>
                                    <div>微信登录</div>
                                </div>
                                <div className={"flex items-center justify-between gap-2 cursor-pointer"}>
                                    <img src={"/weibo.png "} className={"w-[26px] h-[26px]"}/>
                                    <div>微博登录</div>
                                </div>
                                <div className={"flex items-center justify-between gap-2 cursor-pointer"}>
                                    <img src={"/qq.png "} className={"w-[26px] h-[26px]"}/>
                                    <div>QQ登录</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <div>
            {page}
        </div>
    )
}
export default Page