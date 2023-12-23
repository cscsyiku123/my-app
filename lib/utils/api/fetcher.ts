import axios, {AxiosRequestConfig} from "axios";
import {useUserStore} from "@/lib/store/user.store";
import {TResponse} from "@/lib/entitiy/TResponse";

// axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3100/api/pn'
axios.interceptors.request.use(
    function (config) {
        let accessToken = useUserStore.getState().accessToken;
        // const accessToken1 = getLocalStory<{accessToken:string}>(userStorage)?.accessToken;
        console.log(`accessToken:${accessToken}`)
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
// async function fetcher<T, R>(url: string, data?: R) {
//   return await axios.post<TResponse<T>>(url, data).then(e => e.data);
// }


export const fetcher = <TReq, TResp = any>(
    _: string,
    requestConfigCreator: (args: TReq) => AxiosRequestConfig,
) => {
    return (args: TReq) => {
        return axios.request<TResponse<TResp>>(requestConfigCreator(args)).then(e => e.data);
    };
};
