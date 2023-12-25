export const transHumanByteSize = (size: number) => {
    let i = 0;
    let unit = ["B", "KB", "MB", "GB", "TB"];
    while (size > 1024) {
        size /= 1024;
        i++;
    }
    return `${size.toFixed(2)}${unit[i]}`;
}
export const transHumanTime = (time: number) => {
    let i = 0;
    let unit = ["秒", "分钟", "小时", "天", "月", "年"];
    while (time > 60) {
        time /= 60;
        i++;
    }
    return `${time.toFixed(2)}${unit[i]}`;
}

export const transHumanNumber = (number: number) => {
    let i = 0;
    let unit = ["", "万", "亿", "万亿"];
    while (number > 10000) {
        number /= 10000;
        i++;
    }
    return `${number.toFixed(2)}${unit[i]}`;
}

export const formatTime = (time: number | string|Date, formatString: string) => {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();
    return formatString.replace("yyyy", year.toString())
        .replace("MM", month.toString())
        .replace("dd", day.toString())
        .replace("HH", hour.toString())
        .replace("mm", min.toString())
        .replace("ss", second.toString())
}
