import { type NextPage } from "next";
import Head from "next/head";

import { trpc } from "../utils/trpc";
import NewUser from "../types/apiTypes";
import { userAgent } from "next/server";
import { useSession, signIn } from "next-auth/react";
import { getToken } from "next-auth/jwt";

const Home = () => {
    const { data: session } = useSession()
    if (!session) {
        return (
            <button onClick={() => signIn()}>Log In</button>
        )
    }
    return (

        <div>
            <p>Hello world </p>
        </div>
    )

}
export default Home;



