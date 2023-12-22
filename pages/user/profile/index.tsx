import {AccountSignUpType, AuthRequest} from "@/lib/store/user.store";
import {useState} from "react";
import useSWRImmutable from "swr/immutable";
import {TResponse} from "@/lib/entitiy/TResponse";
import axios from "axios";
import {SWRConfig} from "swr";
axios.defaults.baseURL = 'http://localhost:3100/api/pn'

const fetcher = (url: string, data?: any) => {
    console.log(`url:${url}`)
    return axios.post(url, data).then(e => e.data)
}

export function apilogin(authRequest: AuthRequest) {
    console.log(authRequest)
    const {data, error, isLoading,mutate } = useSWRImmutable<TResponse<{ accessToken: string }>>(authRequest? [ 'auth/signIn', authRequest]:null,([url, authRequest]) => fetcher(url, authRequest))
    return {
        data,mutate
    }
}


export default function () {
    const [loginRequest, setLoginRequest] = useState<AuthRequest>(null as unknown as AuthRequest);
    let {data,mutate} = apilogin(loginRequest);

    return <div>
        <div key={"123"} onClick={()=>setLoginRequest(new AuthRequest(0,"123","123"))}>hello !:{data?.data.accessToken}</div>
    </div>
}
