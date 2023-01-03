import { createContext } from "react";

export const StepperContext = createContext({
  step: 1,
  //@ts-ignore
  setStep: (newStep: number) => {},
});
