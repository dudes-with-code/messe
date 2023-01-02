import { useContext } from "react";
import { StepperContext } from "../../../context/StepperContext";
import CompanyDetailsForm from "../Company/CompanyDetailsForm";
import CompanyStep from "../Company/CompanyStep";
import InterestsStep from "../Interests/InterestsStep";

import PersonalDataStep from "../PersonalData/PersonalDataStep";
import PictureStep from "../Picture/PictureStep";
import StartStep from "../Start/StartStep";
import ThankYou from "../ThankYou/ThankYou";

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
      return <StartStep />;
    case 2:
      return <PersonalDataStep />;
    case 3:
      return <PictureStep />;
    case 4:
      return <InterestsStep />;
    case 5:
      return <CompanyStep />;
    case 6:
      return <CompanyDetailsForm />;
    case 7:
      return <ThankYou />;
    case 8:
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
