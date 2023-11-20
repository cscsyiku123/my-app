import {IconType} from "react-icons/lib/cjs/iconBase";

export class CatalogData {
    id: number;
    name :string;
    link: string;
    icon: IconType;
    children: Array<CatalogData>;
    constructor(id: number, name: string, link: string, icon: IconType, children: Array<CatalogData>) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.icon = icon;
        this.children = children;
    }
}
