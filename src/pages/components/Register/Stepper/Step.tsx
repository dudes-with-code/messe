import { useContext } from "react";
import { StepperContext } from "../../../context/StepperContext";
import PersonalDataStep from "../PersonalData/PersonalDataStep";

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
      return <PersonalDataStep />;
    case 2:
      return <PersonalDataStep />;
    case 3:
      return <div>Step 3</div>;
    case 4:
      return <div>Step 4</div>;
    case 5:
      return <div>Step 5</div>;
    case 6:
      return <div>Step 6</div>;
    case 7:
      return <div>Step 7</div>;
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
