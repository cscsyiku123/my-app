import {fetcher} from "@/lib/utils/api/fetcher";
import {transHumanBitSize, transHumanByteSize, transHumanTime} from "@/lib/utils/utils";
import {FileUploadData} from "@/lib/entitiy/fileUploadData";



export function uploadFile(formData: FormData, fileData: [FileUploadData, ((value: (((prevState: FileUploadData) => FileUploadData) | FileUploadData)) => void)]) {
    const [fileUploadData,setFileUploadData] = fileData

    const uploadVideo = fetcher<{
        requestBody: FormData;
    }>("uploadVideo", ({ requestBody }) => ({
        url: `/api/pn/video/uploadVideo`,
        method: "POST",
        data: requestBody,
        onUploadProgress: function (progressEvent) {
            setFileUploadData((o)=>{
                return new FileUploadData(progressEvent.total??0,progressEvent.loaded,progressEvent.rate??0)
            })
            if (progressEvent.progress) {
                console.log(`进度：${(progressEvent.progress*100).toFixed(2)}`)
            }
            if (progressEvent.rate) {
                console.log(`速率：${(transHumanByteSize(progressEvent.rate))}/s`)
            }
            if (progressEvent.estimated) {
                console.log(`预估时间：${transHumanTime(progressEvent.estimated)}`)
            }
        }
    }));
    return uploadVideo({requestBody: formData})
}

// export const uploadVideo = fetcher<{
//   requestBody: FormData;
// }>("uploadVideo", ({ requestBody }) => ({
//   url: `/api/pn/video/uploadVideo`,
//   method: "POST",
//   data: requestBody,
//   onUploadProgress: function (progressEvent) {
//     if (progressEvent.progress) {
//         console.log(`进度：${(progressEvent.progress*100).toFixed(2)}`)
//     }
//     if (progressEvent.rate) {
//         console.log(`速率：${(transHumanByteSize(progressEvent.rate))}/s`)
//     }
//     if (progressEvent.estimated) {
//         console.log(`预估时间：${transHumanTime(progressEvent.estimated)}`)
//     }
//   }
// }));
