export class FileUploadData {
    totalSize: number;
    uploadedSize: number;
    uploadingSpeed: number;

    constructor(totalSize: number, uploadedSize: number, uploadingSpeed: number) {
        this.totalSize = totalSize;
        this.uploadedSize = uploadedSize;
        this.uploadingSpeed = uploadingSpeed;
    }
}
