import { useSession, signIn, signOut } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import AdminHeader from "../components/Admin/AdminHeader";
const Admin = () => {
  const { data: session } = useSession();
  const allUsers = trpc.adminRouter.getAllUsers.useQuery();
  const numOfCoding = trpc.adminRouter.getNumberOfCodingInterested.useQuery()
  if (numOfCoding.isSuccess) {
    console.log(numOfCoding)
  }
  if (!session) {
    return <AdminHeader />;
  }
  return (
    <div>
      <>
        <AdminHeader />
        {allUsers.isSuccess &&
          allUsers.data.map((user) => {
            return <p key={user.id}>{user.firstName}</p>;
          })}
      </>
    </div>
  );
};
export default Admin;
