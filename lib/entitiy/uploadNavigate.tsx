import {IconType} from "react-icons/lib/cjs/iconBase";

export class UploadNavigate {
    id: number;
    name :string;
    link: string;
    constructor(id: number, name: string, link: string) {
        this.id = id;
        this.name = name;
        this.link = link;
    }
}
