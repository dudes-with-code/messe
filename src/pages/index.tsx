import { type NextPage } from "next";
import Head from "next/head";

import { trpc } from "../utils/trpc";
import NewUser from "../types/apiTypes";
import { userAgent } from "next/server";

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

  const mutation = trpc.userData.createUser.useMutation();
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

  let getUser = trpc.userData.getUserByMail.useMutation();
  function getSpecificUser() {
    getUser.mutate({ mail: "test@test.de" });
  }

  let deletedUser = trpc.newUser.deleteUserByID.useMutation()
 function deleteUser () {
    deletedUser.mutate({id: 4})
 }

  let todaysUsers = trpc.userData.getAllUsersFromToday.useMutation();
  function getTodaysUsers() {
    let date = new Date();
    let yesterday =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      (date.getDate() - 1);
    let tomrrow =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      (date.getDate() + 1);
    todaysUsers.mutate({ tomorrow: tomrrow, yesterday: yesterday });
    if (todaysUsers.isSuccess) {
      todaysUsers.data?.forEach((element) => {
        console.log(element.id, ":", element.firstName, element.lastName);
      });
    }
  }

  return (
    <>
      <Head>
        <title>ITS-Messe</title>
        <meta
          name="description"
          content="A project to add new interested Users to the Company Horizon"
        />
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
        <button onClick={getSpecificUser}>Get specific user</button>
        {getUser.isIdle && <div>Please click the search user button!</div>}
        {getUser.isSuccess && (
          <div>Hello there {getUser.data?.firstName} !</div>
        )}

        <button onClick={deleteUser}>Delete the funny test user</button>
       {deletedUser.isSuccess && <p>User deleted</p>} 

        <button onClick={getTodaysUsers}>Get All Users from Today</button>

      </main>
    </>
  );
};

export default Home;
