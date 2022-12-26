import { useSession, signIn, signOut } from "next-auth/react";
import { useContext, useState } from "react";
import { UserContext } from "./context/userDataContext";
import { NewUser } from "./user/user";
import { StepperContext } from "./context/StepperContext";
import RegisterStepper from "./components/Register/Stepper/RegisterStepper";
import Step from "./components/Register/Stepper/Step";
import { ButtonTypes } from "../types/ButtonTypes";
import Button from "./components/Core/Button";

const Home = () => {
  const [user, setUser] = useState(NewUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="h-screen max-h-full w-screen gap-3.5 bg-[#586f7c] p-5 text-xl">
        <RegisterStepper>
          <div className="h-4/5 w-full">
            <Step />
          </div>
          <div className="flex w-full justify-between">
            <Button type={ButtonTypes.Back} />

            <Button type={ButtonTypes.Next} />
          </div>
        </RegisterStepper>
      </div>
    </UserContext.Provider>
  );
};
export default Home;
