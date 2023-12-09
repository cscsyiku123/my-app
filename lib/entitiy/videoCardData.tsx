import {IconType} from "react-icons/lib/cjs/iconBase";

export class VideoTagData {
    id: number;
    name :string;
    link: string;
    imageCoverLink: string;
    playLink: string;
    constructor(id: number, name: string, link: string, imageCoverLink: string, playLink: string) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.imageCoverLink = imageCoverLink;
        this.playLink = playLink;
    }

}
