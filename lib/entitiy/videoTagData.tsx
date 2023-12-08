import {IconType} from "react-icons/lib/cjs/iconBase";

export class VideoTagData {
    id: number;
    name :string;
    checked: boolean;
    constructor(id: number, name: string, checked: boolean) {
        this.id = id;
        this.name = name;
        this.checked = checked;
    }

}
