import { useContext } from "react";
import { StepperContext } from "../../../context/StepperContext";

export default function Step() {
  const { step, setStep } = useContext(StepperContext);

  switch (step) {
    case 0:
      return (
        <>
          <div>Noone should get here so forcing back to first step</div>
          {setStep(1)}
        </>
      );
    case 1:
      return <div>Step 1</div>;
    case 2:
      return <div>Step 2</div>;
    case 3:
      return <div>Step 3</div>;
    case 4:
      return <div>Step 4</div>;
    case 5:
      return (
        <>
          <div>So Resct doesnt cry i hsv to put html element here sadge</div>
          {setStep(1)}
        </>
      );

    default:
      return <div>Oh no broken</div>;
  }
}
