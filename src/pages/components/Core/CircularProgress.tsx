import React from "react";

interface ProgressProps {

  children: React.ReactNode;
}
export default function CircularProgress({  children }: ProgressProps) {
  //const { step, setStep } = useContext(StepperContext);

  return <div >{children}</div>;
}
