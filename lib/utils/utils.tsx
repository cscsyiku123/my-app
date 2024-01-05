export const transHumanByteSize = (size: number) => {
    let i = 0;
    let unit = ["B", "KB", "MB", "GB", "TB"];
    while (size > 1024) {
        size /= 1024;
        i++;
    }
    return `${size.toFixed(2)}${unit[i]}`;
}


export const transHumanBitSize = (size: number) => {
    let i = 0;
    let unit = ["b","B", "KB", "MB", "GB", "TB"];
    if (size > 8) {
        size /= 8;
        i++;
    }
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
    let month = (date.getMonth() + 1).toString().padStart(2, '0');;
    let day = (date.getDate()).toString().padStart(2, '0');
    let hour = (date.getHours()).toString().padStart(2, '0');
    let min = (date.getMinutes()).toString().padStart(2, '0');
    let second = (date.getSeconds()).toString().padStart(2, '0');
    return formatString.replace("yyyy", year.toString())
        .replace("MM", month.toString())
        .replace("dd", day.toString())
        .replace("HH", hour.toString())
        .replace("mm", min.toString())
        .replace("ss", second.toString())
}



export const backendBaseUrl =  'http://localhost:3100'