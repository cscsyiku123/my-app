import {useUserStore} from "@/lib/store/user.store";
import useNextStore from "@/lib/store/store";

export default function () {
    const {accessToken,user} = useNextStore(useUserStore, (state) => state);
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
