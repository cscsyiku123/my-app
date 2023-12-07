import {NextPageWithLayout} from "@/pages/_app";
import React, {ReactElement, useEffect, useRef, useState} from "react";
import PlatformLayout from "@/pages/platform/platformLayout";
import {useRouter} from "next/router";
import {UploadNavigate} from "@/lib/entitiy/uploadNavigate";
import Link from "next/link";


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
                <div>
                    开始上传
                </div>
            }
        </div>
    )
}

const Page: NextPageWithLayout = () => {
    let navigate = [
        new UploadNavigate(1, "视频投稿", "/platform/upload/video/frame"),
        new UploadNavigate(2, "专栏投稿", "/platform/upload/text/edit"),
        new UploadNavigate(3, "互动视频投稿", "/platform/upload/video/interactive"),
    ];
    const [uploadNavigate, setUploadNavigate] = useState(1)
    let router = useRouter();

    useEffect(() => {
        var {isReady, query: {slug}} = router as unknown as { isReady: boolean, query: { slug: string[] } }
        if (isReady) {
            navigate.forEach((item, index) => {
                item.link.endsWith(slug.join("/")) && setUploadNavigate(index + 1)
            })
        }
    }, [router.query]);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="h-full  flex items-center justify-center w-[1000px] mt-2 ">
                <div className=" bg-white w-full p-5 h-full flex flex-col gap-5 items-center">
                    <div
                        className="inNavigate flex border-b border-gray-300 items-center gap-10 h-[50px] text-[16px] text-gray-500 w-full  ">
                        {
                            navigate.map((item, index) => {
                                return (
                                    <Link key={index} href={item.link} className='h-full'>
                                        <div className="h-full"
                                             key={index}
                                             style={{
                                                 borderBottom: `${uploadNavigate === index + 1 ? "2px solid rgb(56 189 248)" : ""}`,
                                                 // color: "#FF6699"
                                             }}
                                        >{item.name}</div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    {
                        uploadNavigate === 1 && <FileUploadSection/>
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
