import { useSession, signIn, signOut } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import AdminHeader from "../components/Admin/AdminHeader";
import DetailTile from "../components/Admin/DetailTile/DetailTile";
const Admin = () => {
  const { data: session } = useSession();
  const userNumbers = trpc.adminRouter.getAllNumbersOfRegisteredUsers.useQuery()
  console.log(userNumbers)
  if (!session) {
    return <AdminHeader />;
  }
  return (
    <div>
      <>
        <AdminHeader />
        <div className="grid grid-cols-6 grid-rows-2 gap-3.5 m-5">
          <div className="col-start-5">
            <DetailTile title="Total Users" totalNum={12} dailyChange={3} />
          </div>
          <div className="col-start-6">
            <DetailTile title="Company Associated" totalNum={12} dailyChange={3} />
          </div>
          <div className="col-start-1 row-start-2">
            <DetailTile title="Web Dev" totalNum={12} dailyChange={3} />
          </div>
          <div className="col-start-2 row-start-2">
            <DetailTile title="Cyber Sec" totalNum={12} dailyChange={3} />
          </div>
          <div className="col-start-3 row-start-2">
            <DetailTile title="Mobile Dev" totalNum={12} dailyChange={3} />
          </div>
          <div className="col-start-4 row-start-2">
            <DetailTile title="Design" totalNum={12} dailyChange={3} />
          </div>
          <div className="col-start-5 row-start-2">
            <DetailTile title={"Data Science"} totalNum={12} dailyChange={3} />
          </div>
          <div className="col-start-6 row-start-2">
            <DetailTile title="Coding" totalNum={12} dailyChange={3} />
          </div>
        </div>

      </>
    </div>
  );
};
export default Admin;
