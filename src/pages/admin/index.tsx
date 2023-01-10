import { useSession, signIn, signOut } from "next-auth/react";

import { trpc } from "../../utils/trpc";
import AdminHeader from "../components/Admin/AdminHeader";
import DetailTile from "../components/Admin/DetailTile/DetailTile";


import UserComponent from "../components/Admin/UserComponent/UserComponent";

export default function Admin() {
  const allUsers = trpc.adminRouter.getAllUsers.useQuery();
  const todaysUsers = trpc.adminRouter.getAllUsersFromToday.useQuery();
  const allAssociates =
    trpc.adminRouter.getNumberOfCompanyAssociated.useQuery();
  const todaysAssociates =
    trpc.adminRouter.getNumberOfCompanyAssociatedToday.useQuery();
  const webDev = trpc.adminRouter.getNumberOfWebDevInterested.useQuery();
  const webDevToday =
    trpc.adminRouter.getNumberOfWebDevInterestedToday.useQuery();
  const cyberSec =
    trpc.adminRouter.getNumberOfCyberSecurityInterested.useQuery();
  const cyberSecToday =
    trpc.adminRouter.getNumberOfCyberSecurityInterestedToday.useQuery();
  const mobileDev = trpc.adminRouter.getNumberOfMobileDevInterested.useQuery();
  const mobileDevToday =
    trpc.adminRouter.getNumberOfMobileDevInterestedToday.useQuery();
  const design = trpc.adminRouter.getNumberOfDesignInterested.useQuery();
  const designToday =
    trpc.adminRouter.getNumberOfDesignInterestedToday.useQuery();
  const dataScience =
    trpc.adminRouter.getNumberOfDataScienceInterested.useQuery();
  const dataSienceToday =
    trpc.adminRouter.getNumberOfDataScienceInterestedToday.useQuery();
  const coding = trpc.adminRouter.getNumberOfCodingInterested.useQuery();
  const codingToday =
    trpc.adminRouter.getNumberOfCodingInterestedToday.useQuery();
  const { data: session } = useSession();

  setTimeout(() => {
    refetchUsers();
  }, 30000);
  function refetchUsers() {
    allUsers.refetch();
  }


  if (!session) {
    return <AdminHeader />;
  }
  return (
    <div className="max-h-screen">
      <>
        <AdminHeader />

        <div className="m-5 grid grid-cols-6 grid-rows-2 gap-3.5">
          <div className="baseline-center col-start-1 col-end-3 flex items-center">
            <h1 className="text-5xl">Hello Admin!</h1>
          </div>
          <div className="col-start-5">

            {allUsers.isSuccess && (
              <DetailTile
                title="Total Users"
                totalNum={allUsers.data.length}
                dailyChange={todaysUsers.data?.length}
              />
            )}

          </div>
          <div className="col-start-6">
            {allAssociates.isSuccess && todaysAssociates.isSuccess && (
              <DetailTile
                title="Company Associated"
                totalNum={allAssociates?.data.length}
                dailyChange={todaysAssociates.data.length}
              />
            )}
          </div>
          <div className="col-start-1 row-start-2">
            {webDev.isSuccess && webDevToday.isSuccess && (
              <DetailTile
                title="Web Dev"
                totalNum={webDev.data[0]?._count.userID}
                dailyChange={webDevToday.data.length}
              />
            )}
          </div>
          <div className="col-start-2 row-start-2">
            {cyberSec.isSuccess && cyberSecToday.isSuccess && (
              <DetailTile
                title="Cyber Sec"
                totalNum={cyberSec.data[0]?._count.userID}
                dailyChange={cyberSecToday.data.length}
              />
            )}
          </div>
          <div className="col-start-3 row-start-2">
            {mobileDev.isSuccess && mobileDevToday.isSuccess && (
              <DetailTile
                title="Mobile Dev"
                totalNum={mobileDev.data[0]?._count.userID}
                dailyChange={mobileDevToday.data.length}
              />
            )}
          </div>
          <div className="col-start-4 row-start-2">
            {design.isSuccess && designToday.isSuccess && (
              <DetailTile
                title="Design"
                totalNum={design.data[0]?._count.userID}
                dailyChange={designToday.data.length}
              />
            )}
          </div>
          <div className="col-start-5 row-start-2">
            {dataScience.isSuccess && dataSienceToday.isSuccess && (
              <DetailTile
                title={"Data Science"}
                totalNum={dataScience.data[0]?._count.userID}
                dailyChange={dataSienceToday.data.length}
              />
            )}
          </div>
          <div className="col-start-6 row-start-2">
            {coding.isSuccess && codingToday.isSuccess && (
              <DetailTile
                title="Coding"
                totalNum={coding.data[0]?._count.userID}
                dailyChange={codingToday.data.length}
              />
            )}
          </div>
        </div>
        <div className="mb-5 mt-16  grid grid-cols-12">
          <div className="col-start-2 pl-10">Name</div>
          <div className="col-start-5 col-end-7 flex pl-10">
            Date Registered
          </div>
          <div className="col-start-8">Company</div>

          <div className="col-start-1 col-end-13 mt-3 h-0.5 bg-gray-500"></div>
        </div>
        <div className="scrollbar-none h-full   overflow-scroll">
          {allUsers.data?.map(
            (user) => {
              return (
                <div>
                  <UserComponent
                    key={user.id}
                    refetch={refetchUsers}
                    user={user}
                  />
                  <div className="col-start-1 col-end-13 my-4 h-0.5 bg-gray-300"></div>
                </div>
              );
            },
            [allUsers]
          )}
        </div>

      </>
    </div>
  );
}
