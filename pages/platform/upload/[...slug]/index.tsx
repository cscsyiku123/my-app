import {NextPageWithLayout} from "@/pages/_app";
import React, {ReactElement, useEffect, useRef, useState} from "react";
import PlatformLayout from "@/pages/platform/platformLayout";
import {useRouter} from "next/router";
import {UploadNavigate} from "@/lib/entitiy/uploadNavigate";
import Link from "next/link";
import {FileUploadData} from "@/lib/entitiy/fileUploadData";
import {transHumanByteSize, transHumanTime} from "@/lib/utils";


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
                <div className='uploadingSection flex flex-col items-start justify-start h-full w-full'>
                    <div>{fileData.name}</div>
                    <div className='flex items-center '>
                        <div>图表</div>
                        <div className='flex items-center flex-col'>
                            <div className='flex justify-between items-center'>
                                <div>{`已经上传：${transHumanByteSize(fileUploadData.uploadedSize)}/${transHumanByteSize(fileData.size)} 当前速度：${transHumanByteSize(fileUploadData.uploadingSpeed)}/s 剩余时间: ${transHumanTime((fileData.size - fileUploadData.uploadedSize) / fileUploadData.uploadingSpeed)}`}</div>
                                <div>{`${(fileUploadData.uploadedSize * 100 / fileData.size).toFixed(0)}%`}</div>
                            </div>
                            <div className='progress h-[4px] bg-gray-300 w-[900px] rounded flex items-start'>
                                <div className='progressBar h-[4px] bg-sky-500 w-[80%] rounded'></div>
                            </div>
                        </div>
                    </div>
                    <div>基本设置</div>
                    <div>封面</div>
                    <div>标题</div>
                    <div>类型</div>
                    <div>分区</div>
                    <div>标签</div>
                    <div>简介</div>
                    <div>定时发布</div>
                    <div>二创设置</div>
                    <div>商业推广</div>
                    <div>更多设置</div>
                    <div className=' flex items-center gap-5'>
                        <input type='button'
                               className='flex items-center justify-center w-[130px] h-[45px] border border-gray-300' value='存草稿'/>
                        <input type='button'
                               className='flex items-center justify-center rounded bg-sky-500 w-[130px] h-[45px] text-white' value='立即投稿'/>
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
