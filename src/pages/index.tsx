import { useEffect, useState } from "react";
import { UserContext } from "../lib/context/userDataContext";
import { NewUser } from "../lib/user/user";
import { StepperContext } from "../lib/context/StepperContext"
import RegisterStepper from "./components/Register/Stepper/RegisterStepper";
import Step from "./components/Register/Stepper/Step";
import { ButtonTypes } from "../types/ButtonTypes";
import Button from "./components/Core/Button";
import TopLeftSVG from "./components/BackgroundSVGs/Start/top-left-start";
import TopMiddleSVG from "./components/BackgroundSVGs/Start/top-middle-start";
import TopRightSVG from "./components/BackgroundSVGs/Start/top-right-start";
import BottomRightSVG from "./components/BackgroundSVGs/Steps/bottom-right-step";
import CircularProgress from "./components/Core/CircularProgress";
import { HiOutlineTicket } from "react-icons/hi";

const Home = () => {
  const cleanUser = NewUser;
  const [user, setUser] = useState(cleanUser);
  const [step, setStep] = useState(1);

  return (
    <div className="z-40 h-screen max-h-full w-full max-w-full bg-[#586f7c]">
      <div className="relative z-50 h-full w-full">
        <UserContext.Provider value={{ user, setUser }}>
          <StepperContext.Provider value={{ step, setStep }}>
            <div className="h-full w-full p-5 text-xl">
              <RegisterStepper>
                <div className="h-5/6">
                  <Step />
                </div>
                <div className="top-0 flex w-full justify-between">
                  {(step === 2 || step === 3 || step === 4 || step === 6) && (
                    <Button type={ButtonTypes.Back} />
                  )}
                  {(step === 2 || step === 3 || step === 4 || step === 6) && (
                    <CircularProgress >
                      <Button type={ButtonTypes.Next} />
                    </CircularProgress>
                  )}
                </div>
              </RegisterStepper>
            </div>
          </StepperContext.Provider>
        </UserContext.Provider>
      </div>
      <div className="top-0">
        <div className="absolute -top-10 z-20">
          {(step === 1 || step === 7) && <TopMiddleSVG />}
        </div>
        <div className="absolute top-0 left-0 z-30">
          <TopLeftSVG />
        </div>

        <div className="absolute top-0 right-0 z-10">
          {(step === 1 || step === 7) && <TopRightSVG />}
        </div>
        <div className="absolute bottom-0 right-0 z-10">
          {step != 1 && <BottomRightSVG />}
        </div>
      </div>
      <div className="rotate-270 absolute top-8 right-8 z-50 -rotate-90">
        <HiOutlineTicket size={52} color={"#F1FFE7"} />
      </div>
    </div>
  );
};
export default Home;
