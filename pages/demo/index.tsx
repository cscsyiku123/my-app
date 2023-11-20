import {NextPageWithLayout} from "@/pages/_app";
import React, {ReactElement} from "react";
import Layout from "@/pages/layout";

const Page: NextPageWithLayout = () => {
    return (
        <>

        </>
    )}

Page.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Page
