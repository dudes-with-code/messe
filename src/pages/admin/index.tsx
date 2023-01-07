import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import AdminHeader from "../components/Admin/AdminHeader";
import DetailTile from "../components/Admin/DetailTile/DetailTile";
const Admin = () => {
  function getData() {
    const allUsers = trpc.adminRouter.getAllUsers.useQuery();
    const todaysUsers = trpc.adminRouter.getAllUsersFromToday.useQuery();
    const allAssociates =
      trpc.adminRouter.getNumberOfCompanyAssociated.useQuery();
    const todaysAssociates =
      trpc.adminRouter.getNumberOfCompanyAssociatedToday.useQuery();
    const webDev = trpc.adminRouter.getNumberOfWebDevInterested.useQuery();
    const webDevToday =
      trpc.adminRouter.getNumberOfWebDevInterestedToday.useQuery();
    const cyberSec = trpc.adminRouter.getNumberOfCyberSecurityInterested.useQuery();
    const cyberSecToday =
      trpc.adminRouter.getNumberOfCyberSecurityInterestedToday.useQuery()
    const mobileDev = trpc.adminRouter.getNumberOfMobileDevInterested.useQuery()
    const mobileDevToday = trpc.adminRouter.getNumberOfMobileDevInterestedToday.useQuery()
    const design = trpc.adminRouter.getNumberOfDesignInterested.useQuery()
    const designToday = trpc.adminRouter.getNumberOfDesignInterestedToday.useQuery()
    const dataScience = trpc.adminRouter.getNumberOfDataScienceInterested.useQuery()
    const dataSienceToday = trpc.adminRouter.getNumberOfDataScienceInterestedToday.useQuery()
    const coding = trpc.adminRouter.getNumberOfCodingInterested.useQuery()
    const codingToday = trpc.adminRouter.getNumberOfCodingInterestedToday.useQuery()
    return {
      allUsers: allUsers.data,
      todaysUsers: todaysUsers.data,
      allAssociates: allAssociates.data,
      todaysAssociates: todaysAssociates.data,
      webDev: webDev.data,
      webDevToday: webDevToday.data,
      cyberSec: cyberSec.data,
      cyberSecToday: cyberSecToday.data,
      mobileDev: mobileDev.data,
      mobileDevToday: mobileDevToday.data,
      design: design.data,
      designToday: designToday.data,
      dataScience: dataScience.data,
      dataSienceToday: dataSienceToday.data,
      coding: coding.data,
      codingToday: codingToday.data
    };
  }
  const { data: session } = useSession();
  const userNumbers = getData();
  console.log(userNumbers);
  if (!session) {
    return <AdminHeader />;
  }
  return (
    <div>
      <>
        <AdminHeader />
        <div className="m-5 grid grid-cols-6 grid-rows-2 gap-3.5">
          <div className="col-start-1 flex col-end-3 baseline-center items-center">
            <h1 className="text-5xl">Hello Admin!</h1>
          </div>
          <div className="col-start-5">
            <DetailTile title="Total Users" totalNum={userNumbers.allUsers?.length} dailyChange={userNumbers.todaysUsers?.length} />
          </div>
          <div className="col-start-6">
            <DetailTile
              title="Company Associated"
              totalNum={userNumbers.allAssociates?.length}
              dailyChange={userNumbers.todaysAssociates?.length}
            />
          </div>
          <div className="col-start-1 row-start-2">
            <DetailTile title="Web Dev" totalNum={userNumbers.webDev?.length} dailyChange={userNumbers.webDevToday?.length} />
          </div>
          <div className="col-start-2 row-start-2">
            <DetailTile title="Cyber Sec" totalNum={userNumbers.cyberSec?.length} dailyChange={userNumbers.cyberSecToday?.length} />
          </div>
          <div className="col-start-3 row-start-2">
            <DetailTile title="Mobile Dev" totalNum={userNumbers.mobileDev?.length} dailyChange={userNumbers.mobileDevToday?.length} />
          </div>
          <div className="col-start-4 row-start-2">
            <DetailTile title="Design" totalNum={userNumbers.design?.length} dailyChange={userNumbers.designToday?.length} />
          </div>
          <div className="col-start-5 row-start-2">
            <DetailTile title={"Data Science"} totalNum={userNumbers.dataScience?.length} dailyChange={userNumbers.dataSienceToday?.length} />
          </div>
          <div className="col-start-6 row-start-2">
            <DetailTile title="Coding" totalNum={userNumbers.coding?.length} dailyChange={userNumbers.codingToday?.length} />
          </div>
        </div>
      </>
    </div>
  );
};
export default Admin;
