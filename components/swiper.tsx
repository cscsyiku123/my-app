import {SwiperData} from "@/lib/entitiy/SwiperData";
import React, {useEffect, useState} from "react";
import Link from "next/link";

export function Swiper(props: { swiperDataList: Array<SwiperData>, }) {
    const [swiperCheckoutIndex, setSwiperCheckoutIndex] = useState(0)
    useEffect(() => {
        const swiperInterval = setInterval(() => {
            setSwiperCheckoutIndex((old) =>{
                console.log(old)
                return (old + 1) % props.swiperDataList.length;
            })
        }, 3000)
        return () => {
            clearInterval(swiperInterval)
        }
    }, [])
    return <div className="homeSwiper w-[850px] h-[550px]  relative flex items-center justify-center ">
        <div className="w-full h-full overflow-hidden rounded-[8px]">
            <div className="w-[calc(100%*3)] h-full border-solid transition-all duration-500"
                 style={{marginLeft: `calc(-100%*${swiperCheckoutIndex})`}}>
                {
                    props.swiperDataList.map((item, index) => {
                        return (
                            <Link href={item.link}>
                                <div key={item.id} className={`w-[calc(100%/${props.swiperDataList.length})] h-full float-left bg-blue-200 float-left`}>
                                    <img src={item.image}/>
                                    <p>{item.description}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        <div className="flex items-center justify-center absolute bottom-5">
            {
                props.swiperDataList.map((item, index) => {
                    return (<label key={index} className="bg-white w-[20px] h-[20px] rounded-full cursor-pointer m-2 hover:scale-125 "></label>)
                })
            }
        </div>
    </div>;
}
