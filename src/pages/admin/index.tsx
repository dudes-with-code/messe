import { useSession, signIn, signOut } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import AdminHeader from "../components/Admin/AdminHeader";
import DetailTile from "../components/Admin/DetailTile/DetailTile";
const Admin = () => {
  const { data: session } = useSession();
  const allUsers = trpc.adminRouter.getAllUsers.useQuery();
  let numOfAllCoding = trpc.adminRouter.getNumberOfCodingInterested.useQuery()
  let allCoding
  if (numOfAllCoding.isSuccess) {
    allCoding = numOfAllCoding.data[0]?._count.userID
  }
  let codingToday = trpc.adminRouter.getNumberOfCodingInterestedToday.useQuery()
  let numOfCodingToday
  if (codingToday.isSuccess) {
    numOfCodingToday = codingToday.data?.length
  }
  if (!session) {
    return <AdminHeader />;
  }
  return (
    <div>
      <>
        <AdminHeader />
        <DetailTile title="Coding" totalNum={allCoding} dailyChange={numOfCodingToday} />
        {allUsers.isSuccess &&
          allUsers.data.map((user) => {
            return <p key={user.id}>{user.firstName}</p>;
          })}

      </>
    </div>
  );
};
export default Admin;
