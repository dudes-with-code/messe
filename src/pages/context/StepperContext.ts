import { createContext } from "react";

export let StepperContext = createContext({
  step: 1,
  setStep: (newStep: number) => {},
});
