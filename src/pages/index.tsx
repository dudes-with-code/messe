import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { UserContext } from "./context/userDataContext";
import { user } from './user/user'

const Home = () => {
    const [newUser, setNewUser] = useState(user)
    return (
        <UserContext.Provider value={user}>
            <div className="h-screen max-h-full w-screen bg-[#586f7c]">
                <p>{user.firstName}</p>
            </div>
        </UserContext.Provider>
    );
};
export default Home;
