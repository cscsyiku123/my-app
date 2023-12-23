

import useStore,  {useUserStore} from "@/lib/store/user.store";



export default function () {
    let accessToken = useStore(useUserStore, (state) => state.accessToken);
    let user = useStore(useUserStore, (state) => state.user);
   let {actionLogin} = useUserStore();

    return <div>
        <div key={"123"} onClick={()=>actionLogin({
            signInType: "0", account: "123", password: "123",
            userId: 0
        })}>123{accessToken}</div>
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
