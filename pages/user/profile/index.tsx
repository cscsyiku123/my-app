

import useStore, {AccountSignUpType, AuthRequest, useUserStore} from "@/lib/store/user.store";



export default function () {
    let accessToken = useStore(useUserStore, (state) => state.accessToken);
    let user = useStore(useUserStore, (state) => state.user);
   let {actionLogin} = useUserStore();

    return <div>
        <div key={"123"} onClick={()=>actionLogin(new AuthRequest(0,"123","123"))}>123{accessToken}</div>
        <div>{accessToken}</div>
        <div>{accessToken}</div>
        <div>{accessToken}</div>
        <div>{accessToken}</div>
        <div>{accessToken}</div>
        <div>{accessToken}</div>
        <div>{accessToken}</div>
        <div>user:{user?.userName}</div>
    </div>
}
