import { type NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import NewUser from "../types/apiTypes";

const Home: NextPage = () => {
  const test: NewUser = {
    lastName: "test",
    firstName: "test",
    mail: "test",
    picture: "test",
    interests: {
      webDevelopment: true,
      cyberSecurity: false,
      mobileDev: false,
      design: false,
      dataScience: false,
      coding: true,
    },
    company: {
      isAssociated: true,
      companyName: "bosch",
      companyEmail: "testmail",
    },
  };

  const mutation = trpc.newUser.createUser.useMutation();
  function createUser() {
    mutation.mutate({
      mail: test.mail,
      firstName: test.firstName,
      lastName: test.lastName,
      picture: test.picture,
      interests: {
        webDevelopment: test.interests.webDevelopment,
        cyberSecurity: test.interests.cyberSecurity,
        mobileDev: test.interests.mobileDev,
        design: test.interests.design,
        dataScience: test.interests.dataScience,
        coding: test.interests.coding,
      },
      company: {
        isAssociated: test.company.isAssociated,
        companyEmail: test.company.companyEmail,
        companyName: test.company.companyName,
      },
    });
    console.log("user added!");
  }

  const user = trpc.newUser.getUserByMail.useQuery({ mail: "test@test.de" });

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <button onClick={createUser} disabled={mutation.isLoading}>
          Click me to add new user
        </button>
        {mutation.isSuccess && <p>Your id is {mutation.data.id}</p>}
        {mutation.error && (
          <p>Something went wrong! {mutation.error.message}</p>
        )}
        <button onClick={createUser}>Get specific user</button>
        {user && <div>Hello there {user.data?.firstName} !</div>}
      </main>
    </>
  );
};

export default Home;
