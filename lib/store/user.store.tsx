import {persist} from 'zustand/middleware'
import {create} from 'zustand'
import axios from 'axios'
import useSWR from "swr";
import {TResponse} from "@/lib/entitiy/TResponse";
import useSWRImmutable from "swr/immutable";



const fetcher = (url: string, data?: any) => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'http://localhost:3100/api/pn'
    console.log('请求 axios ')
    return axios.post(url, data).then(e => e.data)
}

function getUser() {
    const {data, error} = useSWR<TResponse<User>>({url: '/navigation', data: null}, fetcher)
    return data
}



export {getUser};

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

class User {
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
    user: User;
    accessToken: string;
    getUser: () => User | null;
    login: (authRequest: AuthRequest) => { accessToken: string };
}

export const useUserStore = create<UserState>()(
    // devtools(
    persist(
        (set, get) => ({
            user: null as unknown as User,
            accessToken: '',
            getUser: () => {
                if (get().user) {
                    return get().user
                }

                // set({user: null})
                return get().user
            },
            login: (authRequest: AuthRequest) => {
                // let apilogin1 = apilogin(authRequest);
                // set({ accessToken: apilogin1?.data.accessToken})
                return {accessToken: get().accessToken};
            }
        }),

        {
            name: 'user-storage',
        },
    ),
    // ),
)
