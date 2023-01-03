import { useSession, signIn, signOut } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import AdminHeader from "../components/Admin/AdminHeader";
const Admin = () => {
  const { data: session } = useSession();
  const allUsers = trpc.adminRouter.getAllUsers.useQuery();
  const numOfCoding = trpc.adminRouter.getNumberOfCodingInterested.useQuery()
  const numOfWebDev = trpc.adminRouter.getNumberOfWebDevInterested.useQuery()

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
        {numOfCoding.isSuccess && <p>Interested in Coding: {numOfCoding.data[0]?._count.userID}</p>}

        {numOfWebDev.isSuccess && <p>Interested in WebDev: {numOfWebDev.data[0]?._count.userID}</p>}
      </>
    </div>
  );
};
export default Admin;
