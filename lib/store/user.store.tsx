import {persist} from 'zustand/middleware'
import {create} from 'zustand'
import {AuthRequest, getProfile, signIn, UserVo} from "@/lib/utils/api/RemoteSwaggerService";
import {router} from "next/client";
let userStorage = 'user-storage';
//
//  function apiLogin<R>(request: R) {
//      return  fetcher<{ accessToken: string }, R>('/auth/signIn', request);
// }
// function apiUserProfile<R>(request: R) {
//     return fetcher<UserVo, R>('/user/profile', request);
// }

//
//
// export class AuthRequest {
//     signInType: AccountSignUpType;
//     account: string;
//     password: string;
//     userId?: number;
//
//     constructor(signInType: AccountSignUpType, account: string, password: string) {
//         this.signInType = signInType;
//         this.account = account;
//         this.password = password;
//     }
// }
//
// export enum AccountSignUpType {
//     PASSWORD,
//     SMS,
// }




interface UserState {
    user: UserVo;
    accessToken: string;
    parentCommentId: number;
    openAuthOverlay: boolean;
    actionLogin:  (authRequest: AuthRequest) => Promise<{ accessToken: string }>;
    actionLogout:  () => void;
}

export const useUserStore = create<UserState>()(
    // devtools(
    persist(
        (set, get) => ({
            user: null as unknown as UserVo,
            accessToken: '',
            parentCommentId:0,
            openAuthOverlay : false,
            actionLogin: async (authRequest: AuthRequest) => {
                let result =  await signIn({requestBody: authRequest});
                if (result.success) {
                    let accessToken = result?.data.accessToken;
                    set({ accessToken: accessToken})
                    let tResponse =await getProfile(accessToken);
                    set({user: tResponse?.data})
                    set({openAuthOverlay: false})
                } else {
                    alert(result.message)
                }
                return {accessToken: get().accessToken};
            },
            actionLogout: () => {
                set({accessToken: '',parentCommentId:0,user: null as unknown as UserVo,openAuthOverlay: false})
            },

        }),

        {
            name: userStorage,
        },
    ),
)
