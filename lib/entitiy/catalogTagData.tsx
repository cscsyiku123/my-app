import {IconType} from "react-icons/lib/cjs/iconBase";

export class CatalogTagData {
    id: number;
    name :string;
    link: string;
    icon: IconType;
    children: Array<CatalogTagData>;
    constructor(id: number, name: string, link: string, icon: IconType, children: Array<CatalogTagData>) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.icon = icon;
        this.children = children;
    }
}
