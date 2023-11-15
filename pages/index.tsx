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
                <div className="searchTopBar">
                    <input type="text" placeholder="T1训练营" onFocus={()=>setSearchDetailShow(!searchDetailShow)}/>
                    <div className="searchIcon"></div>
                    {searchDetailShow && <div></div>}
                </div>
            </div>
        </>
    )
}

