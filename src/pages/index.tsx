import { useSession, signIn, signOut } from "next-auth/react";
import { useContext, useState } from "react";
import { UserContext } from "./context/userDataContext";
import { user } from "./user/user";
import { StepperContext } from "./context/StepperContext";
import RegisterStepper from "./components/Register/Stepper/RegisterStepper";
import Step from "./components/Register/Stepper/Step";
import { ButtonTypes } from "../types/ButtonTypes";
import Button from "./components/Core/Button";

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
      <div className="h-screen max-h-full w-screen gap-3.5 bg-[#586f7c] p-2">
        <RegisterStepper>
          <Step />
          <Button type={ButtonTypes.Next} />
          <Button type={ButtonTypes.Back} />
        </RegisterStepper>
      </div>
    </UserContext.Provider>
  );
};
export default Home;
