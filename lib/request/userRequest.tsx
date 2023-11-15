import axios from 'axios'
import useSWR from "swr";
import {TResponse} from "@/lib/entitiy/TResponse";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000'
const fetcher = (url: string) => axios.get(url).then(res => res.data)
function getUser(){
    const { data, error } = useSWR<TResponse<any>>('/api/navigation', fetcher)
    return data;
}
export {getUser};
