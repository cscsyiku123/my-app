
export class FileUploadData {
    uploadedSize :number;
    uploadingSpeed :number;
    fileCoverImage:string[];
    constructor(uploadedSize: number, uploadingSpeed: number, fileCoverImage: string[]) {
        this.uploadedSize = uploadedSize;
        this.uploadingSpeed = uploadingSpeed;
        this.fileCoverImage = fileCoverImage;
    }
}
