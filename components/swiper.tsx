import {SwiperData} from "@/lib/entitiy/swiperData";
import React, {useEffect, useState} from "react";

export function Swiper(props: { swiperDataList: Array<SwiperData>, }) {

    const [swiperCheckoutIndex, setSwiperCheckoutIndex] = useState(0)
    useEffect(() => {
        const swiperInterval = setInterval(() => {
            setSwiperCheckoutIndex((old) => {
                // console.log(old)
                return (old + 1) % props.swiperDataList.length;
            })
        }, 3000)
        return () => {
            clearInterval(swiperInterval)
        }
    }, [])
    return <div
        className="homeSwiper min-w-[500px]  h-[550px]    col-span-2 row-span-2 relative ">
        <div className="w-full h-full overflow-hidden  rounded-[8px]">
            <div className={` h-full border-solid transition-all duration-500`}
                 style={{
                     marginLeft: `calc(-100%*${swiperCheckoutIndex})`,
                     width: `calc(100%*${props.swiperDataList.length})`
                 }}>
                {
                    props.swiperDataList.map((item, index) => {
                        return (
                            <div key={item.id}
                                 className={` h-full bg-blue-200 float-left flex items-center justify-center relative`}
                                 style={{
                                     width: `calc(100%/${props.swiperDataList.length})`
                                 }}
                            >
                                <img src={item.image}/>
                                <div className="text-white font-medium absolute bottom-10">{item.description}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="flex items-center justify-center absolute bottom-1">
            {
                props.swiperDataList.map((item, index) => {
                    return (<label key={index}
                                   className="bg-white w-[20px] h-[20px] rounded-full cursor-pointer m-2 hover:scale-125 "></label>)
                })
            }
        </div>
    </div>;
}
