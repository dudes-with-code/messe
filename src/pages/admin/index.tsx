import { useSession } from "next-auth/react";
import { trpc } from "../../utils/trpc";
import AdminHeader from "../components/Admin/AdminHeader";
const Admin = () => {
  const { data: session } = useSession();
  const allUsers = trpc.userData.getAllUsers.useQuery();
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
