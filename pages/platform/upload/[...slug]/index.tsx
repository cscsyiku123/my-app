import {NextPageWithLayout} from "@/pages/_app";
import React, {ReactElement, useEffect, useRef, useState} from "react";
import PlatformLayout from "@/pages/platform/platformLayout";
import {useRouter} from "next/router";
import {UploadNavigate} from "@/lib/entitiy/uploadNavigate";
import Link from "next/link";
import {FileUploadData} from "@/lib/entitiy/fileUploadData";
import {transHumanByteSize, transHumanTime} from "@/lib/utils";
import {BsFillFileEarmarkPlayFill} from "react-icons/bs";
import {VideoTagData} from "@/lib/entitiy/videoTagData";


// const createPost = async () => {
//     errors.value = null
//
//     let data = new FormData();
//
//     data.append('video', fileData.value || '')
//     data.append('text', caption.value || '')
//
//     if (fileData.value && caption.value) {
//         isUploading.value = true
//     }
//
//     try {
//         let res = await $userStore.createPost(data)
//         if (res.status === 200) {
//             setTimeout(() => {
//                 router.push('/profile/' + $userStore.id)
//                 isUploading.value = false
//             }, 1000)
//         }
//     } catch (error) {
//         errors.value = error.response.data.errors
//         isUploading.value = false
//     }
// }

function VideoTag(props: { item: VideoTagData, onClick?: () => void, withIcon?: boolean, withCloseIcon?: boolean }) {
    return <div
        className={"flex items-center justify-center bg-gray-100  px-4 py-1 rounded text-[12px] hover:bg-sky-500 hover:text-white"}
        style={{
            backgroundColor: `${props.item.checked ? "rgb(14 165 233)" : ""}`,
            color: `${props.item.checked ? "#fff" : ""}`
        }}
        onClick={props.onClick}
    >{`${props.item.name}${props.withCloseIcon ? " ×" : ""}`}</div>;
}

function FileUploadSection() {
    let fileRef = useRef<HTMLInputElement>(null);
    const [fileData, setFileData] = useState<File>()
    const [fileUploadData, setFileUploadData] = useState(new FileUploadData(10000000, 2000, ['/example.png', '/example.png', '/example.png']));
    const onChange = (e: any) => {
        setFileData(fileRef.current?.files?.[0])
    }
    const onDrop = (e: any) => {
        e.preventDefault()
        setFileData(e.dataTransfer.files[0])
    }

    function onDragOver(e: any) {
        e.preventDefault()
    }

    useEffect(() => {
        console.log(`fileData 改变了`)
        console.log(fileData)
    }, [fileData])

    const [title, setTitle] = useState('')
    useEffect(() => {
        if (title.length > 80) {
            setTitle(title.slice(0, 80))
        }
    }, [title])
    const [tag, setTag] = useState<VideoTagData[]>([
        new VideoTagData(1, "动画1", false),
        new VideoTagData(2, "动画2", false),
        new VideoTagData(3, "动画3", false),
        new VideoTagData(4, "动画4", false),
    ])
    useEffect(() => {
        if (tag.length > 10) {
            setTag(tag.slice(0, 10))
        }
    }, [tag])


    const [brief, setBrief] = useState('')
    useEffect(() => {
        if (brief.length > 2000) {
            setBrief(brief.slice(0, 2000))
        }
    }, [brief])

    const [slideButton, setSlideButton] = useState(false)

    return (
        <div>
            {
                !fileData && <label htmlFor="fileInput"
                                    className="uploadSection flex flex-col items-center justify-center border-dashed border-2 border-gray-400 w-[800px] h-[300px] cursor-pointer hover:bg-gray-50 gap-5"
                                    onDrop={onDrop} onDragOver={onDragOver}>
                    <input type="file" className=" hidden" id="fileInput" onChange={onChange} ref={fileRef}/>
                    <p className="text-gray-400">拖拽导此处也可上传</p>
                    <div className="text-white bg-sky-500 w-[250px] h-[45px] rounded flex items-center justify-center">上传视频
                    </div>
                    <p className="text-gray-400">当前审核队列 快速</p>
                </label>
            }
            {
                fileData &&
                <div className='uploadingSection flex flex-col items-start justify-start h-full w-full gap-3'>
                    <div>{fileData.name}</div>
                    <div className='flex items-center '>
                        <div>
                            <BsFillFileEarmarkPlayFill className={'text-sky-400 w-[50px] h-[50px]'}/>
                        </div>
                        <div className='flex items-start flex-col gap-3  '>
                            <div className='flex justify-between items-center w-full text-gray-500'>
                                <div>{`已经上传：${transHumanByteSize(fileUploadData.uploadedSize)}/${transHumanByteSize(fileData.size)} 当前速度：${transHumanByteSize(fileUploadData.uploadingSpeed)}/s 剩余时间: ${transHumanTime((fileData.size - fileUploadData.uploadedSize) / fileUploadData.uploadingSpeed)}`}</div>
                                <div>{`${(fileUploadData.uploadedSize * 100 / fileData.size).toFixed(0)}%`}</div>
                            </div>
                            <div className='progress h-[4px] bg-gray-300 w-[900px] rounded flex items-start'>
                                <div className='progressBar h-[4px] bg-sky-500 rounded'
                                     style={{
                                         width: `${(fileUploadData.uploadedSize * 100 / fileData.size).toFixed(0)}%`
                                     }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex items-center gap-10'}>
                        <p className={' font-medium text-gray-700'}>基本设置</p>
                        <input type={'button'} className={'border border-gray-300 text-gray-500 rounded text-[12px] px-5 py-1'} value={'一键填写'}/>
                    </div>
                    <div className={'flex items-center gap-10'}>
                        <div className={'flex items-center gap-1'}>
                            <p className={' text-red-500'}>*</p>
                            <p>封面</p>
                        </div>
                    </div>
                    <div className={'flex items-center gap-10'}>
                        <div className={'flex items-center gap-1'}>
                            <p className={' text-red-500'}>*</p>
                            <p>标题</p>
                        </div>
                        <div className={' border border-gray-300 flex px-3 py-2 items-center rounded w-[800px] justify-between hover:border hover:border-sky-500 text-[14px]'}>
                            <input type={'text'} placeholder={'清晰明了'} className={' placeholder-gray-300 focus:outline-none border-none w-full'} onChange={(e) => {
                                setBrief(e.target.value)
                            }}></input>
                            <div className={'text-gray-500'}>{`${brief.length}/80`}</div>
                        </div>
                    </div>
                    <div className={'flex items-center gap-10'}>
                        <div className={'flex items-center gap-1'}>
                            <p className={' text-red-500'}>*</p>
                            <p>类型</p>
                        </div>
                        <div className={'flex items-center gap-5'}>
                            <div className={'gap-1 flex items-center'}>
                                <input type="radio" id="option1" name="options" checked={true} className={'w-[20px] h-[20px] checked:bg-red-300 p-0'}></input>
                                <label htmlFor="option1">自制</label>
                            </div>
                            <div className={'gap-1 flex items-center'}>
                                <input type="radio" id="option2" name="options"></input>
                                <label htmlFor="option2">转载</label>
                            </div>
                        </div>
                    </div>
                    <div className={'flex items-start   gap-10'}>
                        <div className={'flex items-center gap-1'}>
                            <p className={' text-red-500'}>*</p>
                            <p>分区</p>
                        </div>
                        <div>下拉框</div>
                    </div>
                    <div className={'flex items-start  gap-10'}>
                        <div className={'flex items-start justify-start  gap-1'}>
                            <p className={' text-red-500'}>*</p>
                            <p>标签</p>
                        </div>
                        <div className={'flex flex-col gap-3'}>
                            <div className={' border border-gray-300 flex px-3 py-2 items-center rounded w-[800px] justify-between hover:border hover:border-sky-500 text-[14px]'}>
                                <div placeholder={'清晰明了'} className={'gap-3 flex items-start placeholder-gray-300 focus:outline-none border-none w-[600px]'}>
                                    {
                                        tag.filter((item) => {
                                            return item.checked
                                        }).map((item, index) => {
                                            return (
                                                <VideoTag key={index} item={item}
                                                          onClick={() => {
                                                              item.checked = !item.checked
                                                              setTag([...tag])
                                                          }}
                                                          withCloseIcon={true}
                                                />
                                            )
                                        })
                                    }
                                </div>
                                <div className={'text-gray-500'}>{`还可以添加${10 - tag.filter((item) => {
                                    return item.checked
                                }).length}个标签`}</div>
                            </div>
                            <div className={'recommandTag text-gray-600 text-[14px] flex flex-col gap-3'}>
                                <div className={'flex gap-3  flex-wrap'}>
                                    <p>推荐标签：</p>
                                    {
                                        tag.map((item, index) => {
                                            return (
                                                <VideoTag key={index} item={item} onClick={() => {
                                                    item.checked = !item.checked
                                                    setTag([...tag])
                                                }}/>
                                            )
                                        })
                                    }
                                </div>
                                <div className={'flex gap-3 flex-wrap'}>
                                    <p>参与话题：</p>
                                    {
                                        tag.map((item, index) => {
                                            return (
                                                <VideoTag key={index} item={item} onClick={() => {
                                                    item.checked = !item.checked
                                                    setTag([...tag])
                                                }}

                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex items-start gap-10'}>
                        <p>简介</p>
                        <div className={'flex flex-col items-end'}>
                            <textarea className="text-[14px] rounded-lg  h-full outline-none border border-gray-300 w-[800px] placeholder-gray-400 resize-none p-2  h-[200px]" placeholder="填写更详细的信息，让别人关注到你" onChange={(e) => {
                                setBrief(e.target.value)
                            }}/>
                            <div>{`${brief.length}/2000`}</div>
                        </div>
                    </div>
                    <div className={'flex items-center gap-10'}>
                        <p>定时发布</p>
                        <div className={'flex gap-3'}>
                            <div className={' bg-gray-100 flex px-1 transition-all duration-150 rounded-3xl w-[50px] h-[25px] relative'}
                                onClick={()=>{setSlideButton((old)=>{ return !old})}}
                                 style={{
                                        backgroundColor: `${slideButton ? "rgb(56 189 248)" : ""}`,
                                 }}
                            >
                                <div className={'bg-white rounded-full w-[23px] h-[23px] absolute left-0'}
                                style={{
                                    right: `${slideButton ? "0" : ""}`,
                                }}
                                ></div>
                            </div>
                            <div>(当前+2小时 ≤ 可选时间 ≤ 当前+15天，定时发布一经选择不支持修改/取消)</div>
                        </div>
                    </div>
                    <div className={'flex items-center gap-10'}>
                        <p>二创设置</p>
                        <div>允许二创</div>
                    </div>
                    <div className={'flex items-center gap-10'}>
                        <p>商业推广</p>
                        <div>增加商业推广信息</div>
                    </div>
                    <div className={'flex items-center gap-10'}>
                        <p>更多设置</p>
                        <p>（含声明与权益、视频元素、互动管理等）</p>
                    </div>
                    <div className=' flex items-center gap-5'>
                        <input type='button' className='flex items-center justify-center rounded w-[130px] h-[45px] border border-gray-300' value='存草稿'/>
                        <input type='button' className='flex items-center justify-center rounded bg-sky-500 w-[130px] h-[45px] text-white' value='立即投稿'/>
                    </div>
                </div>
            }
        </div>
    )
}

const Page: NextPageWithLayout = () => {
    let navigateData = [
        new UploadNavigate(1, "视频投稿", "/platform/upload/video/frame"),
        new UploadNavigate(2, "专栏投稿", "/platform/upload/text/edit"),
        new UploadNavigate(3, "互动视频投稿", "/platform/upload/video/interactive"),
    ];
    const [uploadNavigateIndex, setUploadNavigateIndex] = useState(1)
    let router = useRouter();

    useEffect(() => {
        var {isReady, query: {slug}} = router as unknown as { isReady: boolean, query: { slug: string[] } }
        if (isReady) {
            navigateData.forEach((item, index) => {
                item.link.endsWith(slug.join("/")) && setUploadNavigateIndex(index)
            })
        }
    }, [router.query]);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="h-full  flex items-center justify-center w-[1100px] mt-2 ">
                <div className=" bg-white w-full p-5 h-full flex flex-col gap-5 items-center">
                    <div
                        className="inNavigate flex border-b border-gray-300 items-center gap-10 h-[50px] text-[16px] text-gray-500 w-full  ">
                        {
                            navigateData.map((item, index) => {
                                return (
                                    <Link key={index} href={item.link} className='h-full'>
                                        <div className="h-full"
                                             key={index}
                                             style={{
                                                 borderBottom: `${uploadNavigateIndex === index ? "2px solid rgb(56 189 248)" : ""}`,
                                                 // color: "#FF6699"
                                             }}
                                        >{item.name}</div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    {
                        uploadNavigateIndex === 0 && <FileUploadSection/>
                        || <div>{navigateData[uploadNavigateIndex].name}</div>
                    }


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
