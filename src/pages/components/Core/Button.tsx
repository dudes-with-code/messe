import { useContext, useState } from "react";
import { ButtonTypes } from "../../../types/ButtonTypes";
import { StepperContext } from "../../context/StepperContext";

interface ButtonProps {
  type: ButtonTypes;
}

export default function Button({ type }: ButtonProps) {
  const { step, setStep } = useContext(StepperContext);
  //implement different buttontypes
  switch (type) {
    case ButtonTypes.Next:
      return (
        <button onClick={() => setStep(step + 1)} className="m-2">
          Next
        </button>
      );
    case ButtonTypes.Back:
      return (
        <button onClick={() => setStep(step - 1)} className="m-2">
          Back
        </button>
      );
    default:
      return <div>Please Provide a ButtonType</div>;
  }
}
