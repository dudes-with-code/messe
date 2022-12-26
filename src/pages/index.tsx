import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { UserContext } from "./context/userDataContext";
import { user } from "./user/user";

const Home = () => {
  const [newUser, setNewUser] = useState(user);
  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    await setNewUser((newUser) => ({
      ...newUser,
      firstName: event.target.value,
    }));
  }
  function handleClick() {
    console.log(newUser);
  }
  return (
    <UserContext.Provider value={newUser}>
      <div className="h-screen max-h-full w-screen bg-[#586f7c]">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Update State</button>
      </div>
    </UserContext.Provider>
  );
};
export default Home;
