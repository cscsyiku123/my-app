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