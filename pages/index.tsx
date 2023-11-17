import {useState} from "react";

export default function () {
    const [searchDetailShow, setSearchDetailShow] = useState(false)
    return (
        <>
            <div className="navigate w-full h-[75px] bg-amber-200 flex items-center justify-center font-medium text-white">
                <div>首页</div>
                <div>番剧</div>
                <div>直播</div>
                <div>游戏中心</div>
                <div>会员购</div>
                <div className="searchTopBar h-[40px] w-[300px] bg-gray-100 rounded-2xl flex items-center justify-around relative">
                    <input className=" bg-transparent focus:outline-none placeholder:font-medium placeholder-gray-300 text-gray-700 gr w-[250px] font-light" type="text" placeholder="T1训练营" onBlur={()=>setSearchDetailShow(false)} onFocus={()=>setSearchDetailShow(true)}/>
                    <div className="searchIcon"></div>
                    {searchDetailShow &&
                        <div className="w-full absolute bg-white rounded-lg top-[40px] left-0 text-gray-700  p-3">
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="font-bold  ">搜索历史</div>
                                    <div className=" text-gray-200 border-l border-l-gray-200 text-[12px] hover:text-blue-300 pl-2">清空</div>
                                </div>
                                <div className=" mt-3 font-light text-[12px] flex items-center justify-between content-between flex-wrap">
                                    <div className="bg-gray-300 p-0.5 rounded-lg hover:bg-gray-400 relative">123
                                        <div className="absolute rounded-full "></div>
                                    </div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                    <div>123</div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

