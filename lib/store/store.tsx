import {useEffect, useState} from "react";

const useNextStore = <T, F>(
    store: (callback: (state: T) => unknown) => unknown,
    callback: (state: T) => F,
) => {
    const result = store(callback) as F
    const [data, setData] = useState<F>({} as F)

    useEffect(() => {
        setData(result)
    }, [result])

    return data
}


export function getLocalStory<T>(key: string):T|null {
    let item = localStorage.getItem(key);
    if (item){
        let s = JSON.parse(item) as {state:T};
        return s.state
    }
    return null;
}

export default useNextStore