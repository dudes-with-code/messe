import { useState } from "react";
import { UserContext } from "./context/userDataContext";
import { NewUser } from "./user/user";
import { StepperContext } from "./context/StepperContext";
import RegisterStepper from "./components/Register/Stepper/RegisterStepper";
import Step from "./components/Register/Stepper/Step";
import { ButtonTypes } from "../types/ButtonTypes";
import Button from "./components/Core/Button";
import TopLeftSVG from "./components/BackgroundSVGs/Start/top-left-start";
import TopMiddleSVG from "./components/BackgroundSVGs/Start/top-middle-start";
import TopRightSVG from "./components/BackgroundSVGs/Start/top-right-start";
import BottomRightSVG from "./components/BackgroundSVGs/Steps/bottom-right-step";
import CircularProgress from "./components/Core/CircularProgress";

const Home = () => {
  const [user, setUser] = useState(NewUser);
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
                <div className="flex w-full justify-between">
                  <Button type={ButtonTypes.Back} />
                  {step != 1 && (
                    <CircularProgress number={step}>
                      <Button type={ButtonTypes.Next} />
                    </CircularProgress>
                  )}
                  {step === 1 && <Button type={ButtonTypes.Next} />}
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
    </div>
  );
};
export default Home;
