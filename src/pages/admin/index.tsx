import { useSession, signIn, signOut } from "next-auth/react";
import { trpc } from '../../utils/trpc'
import AdminHeader from "../components/AdminHeader";
const Admin = () => {
    const { data: session } = useSession()
    const allUsers = trpc.userData.getAllUsers.useQuery()
    if (!session) {
        return (
            <button onClick={() => signIn()}>Log In</button>
        )
    }
    return (

        <div>
            <>

                <AdminHeader />
                <button onClick={() => signOut()}>Sign Out</button>
                {allUsers.isSuccess && allUsers.data.map((user) => {
                    return <p key={user.id}>{user.firstName}</p>
                })}
            </>
        </div>
    )

}
export default Admin;


