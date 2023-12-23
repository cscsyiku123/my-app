import {persist} from 'zustand/middleware'
import {create} from 'zustand'
import axios from 'axios'
import {TResponse} from "@/lib/entitiy/TResponse";
let userStorage = 'user-storage';
axios.defaults.baseURL = 'http://localhost:3100/api/pn'
axios.interceptors.request.use(
// axios.defaults.withCredentials = true;
function (config) {
        const accessToken = getLocalStory<{accessToken:string}>(userStorage)?.accessToken;
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
 async function fetcher<T, R>(url: string, data?: R) {
    return await axios.post<TResponse<T>>(url, data).then(e => e.data);
}

 function apiLogin<R>(request: R) {
     return  fetcher<{ accessToken: string }, R>('/auth/signIn', request);
}
function apiUserProfile<R>(request: R) {
    return fetcher<UserVo, R>('/user/profile', request);
}



export class AuthRequest {
    signInType: AccountSignUpType;
    account: string;
    password: string;
    userId?: number;

    constructor(signInType: AccountSignUpType, account: string, password: string) {
        this.signInType = signInType;
        this.account = account;
        this.password = password;
    }
}

export enum AccountSignUpType {
    PASSWORD,
    SMS,
}



function getLocalStory<T>(key: string):T|null {
    let item = localStorage.getItem(key);
    if (item){
        let s = JSON.parse(item) as {state:T};
        return s.state
    }
    return null;
}


class UserVo {
    userId: number;
    userName: string;
    avatarImageLink: string;

    constructor(userId: number, userName: string, avatarImageLink: string) {
        this.userId = userId;
        this.userName = userName;
        this.avatarImageLink = avatarImageLink;
    }
}

interface UserState {
    user: UserVo;
    accessToken: string;
    actionLogin:  (authRequest: AuthRequest) => Promise<{ accessToken: string }>;
}
import { useState, useEffect } from 'react'
import {Result} from "postcss";

const useStore = <T, F>(
    store: (callback: (state: T) => unknown) => unknown,
    callback: (state: T) => F,
) => {
    const result = store(callback) as F
    const [data, setData] = useState<F>()

    useEffect(() => {
        setData(result)
    }, [result])

    return data
}

export default useStore
export const useUserStore = create<UserState>()(
    // devtools(
    persist(
        (set, get) => ({
            user: null as unknown as UserVo,
            accessToken: '',
            actionLogin: async (authRequest: AuthRequest) => {
                let result =  await apiLogin(authRequest);
                let accessToken = result?.data.accessToken;
                set({ accessToken: accessToken})
                let tResponse =await apiUserProfile(accessToken);
                set({user: tResponse?.data})
                return {accessToken: get().accessToken};
            }
        }),

        {
            name: userStorage,
        },
    ),
    // ),
)
