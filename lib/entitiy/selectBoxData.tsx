import {IconType} from "react-icons/lib/cjs/iconBase";

export class SelectBoxData {
    id: number;
    name :string;
    description?: string|null;
    children?: SelectBoxData[]|null;
    checked?: boolean;

    constructor(id: number, name: string, description?: string|null, cildren?: SelectBoxData[]|null) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.children = cildren;
    }
}
