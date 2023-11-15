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
                    <input className=" bg-opacity-100 w-[250px]" type="text" placeholder="T1训练营" onFocus={()=>setSearchDetailShow(!searchDetailShow)}/>
                    <div className="searchIcon"></div>
                    {searchDetailShow && <div className="w-[300px] absolute top-[100px]">12123123123133</div>}
                </div>
            </div>
        </>
    )
}

