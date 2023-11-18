export class SwiperData {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;

    private constructor(id: number, title: string, description: string, image: string, link: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.link = link;
    }

    public static getSwiperData(id: number, title: string, description: string, image: string, link: string): SwiperData {
        return new SwiperData(id, title, description, image, link);
    }
}
