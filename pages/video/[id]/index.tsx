// import type { ReactElement } from 'react'
// import Layout from '../components/layout'
// import NestedLayout from '../components/nested-layout'
// import {NextPageWithLayout} from "@/pages/_app";
//
// const Page: NextPageWithLayout = () => {
//     return <p>hello world</p>
// }
//
// Page.getLayout = function getLayout(page: ReactElement) {
//     return (
//         <Layout>
//             <NestedLayout>{page}</NestedLayout>
//         </Layout>
//     )
// }
//
// export default Page

import React, {Component, ReactElement} from "react";
import Layout from "@/pages/layout";
import {NextPageWithLayout} from "@/pages/_app";

const Page: NextPageWithLayout = () => {
    return (
        <>
            <div className="w-full h-full bg-amber-100">123</div>
        </>
    )
}
Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}


export default Page

