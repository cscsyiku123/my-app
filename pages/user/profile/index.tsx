import {getUser} from "@/lib/request/userRequest";
import {useState} from "react";
import {Router} from "next/router";

export default function () {
    let user = getUser();
    console.log(user)

    return (
        <div>Profile</div>
    )
}
