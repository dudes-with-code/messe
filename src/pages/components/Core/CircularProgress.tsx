import React, { useContext } from "react";
import { StepperContext } from "../../context/StepperContext";
interface ProgressProps {
  number: number;
  children: React.ReactNode;
}
export default function CircularProgress({ number, children }: ProgressProps) {
  const { step, setStep } = useContext(StepperContext);

  return <div>{children}</div>;
}
