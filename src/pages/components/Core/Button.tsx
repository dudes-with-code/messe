import { useContext, useState } from "react";
import { ButtonTypes } from "../../../types/ButtonTypes";
import { StepperContext } from "../../context/StepperContext";
import { AiOutlineArrowRight } from "react-icons/ai";
import CircularProgress from "./CircularProgress";

interface ButtonProps {
  type: ButtonTypes;
}

export default function Button({ type }: ButtonProps) {
  const { step, setStep } = useContext(StepperContext);
  //implement different buttontypes
  switch (type) {
    case ButtonTypes.Next: {
      return (
        <button onClick={() => setStep(step + 1)} className="m-5">
          <AiOutlineArrowRight color="#F1FFE7" size={42} />
        </button>
      );
    }
    case ButtonTypes.Back:
      return <button onClick={() => setStep(step - 1)}>Back</button>;
    default:
      return <div>Please Provide a ButtonType</div>;
  }
}
