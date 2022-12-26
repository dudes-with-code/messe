import { useContext, useState } from "react";
import { ButtonTypes } from "../../../../types/ButtonTypes";
import { StepperContext } from "../../../context/StepperContext";
import Button from "../../Core/Button";

interface StepperProps {
  children: React.ReactNode;
}
export default function RegisterStepper({ children }: StepperProps) {
  const [step, setStep] = useState(1);
  return (
    <>
      <StepperContext.Provider value={{ step, setStep }}>
        {children}
      </StepperContext.Provider>
    </>
  );
}
