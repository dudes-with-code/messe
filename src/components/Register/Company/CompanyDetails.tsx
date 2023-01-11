import { useContext } from "react";
import { ButtonTypes } from "../../../types/ButtonTypes";
import { StepperContext } from "../../../lib/context/StepperContext";

import Button from "../../Core/Button";

export default function CompanyDetails() {
  const { step, setStep } = useContext(StepperContext);
  return (
    <div className="flex-col items-center justify-center text-center">
      <div onClick={() => setStep(step + 1)}>
        <Button type={ButtonTypes.PartOfCompany} />
      </div>
      <Button type={ButtonTypes.NoPartOfCompany} />
    </div>
  );
}
