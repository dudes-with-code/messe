import { useContext } from "react";
import { ButtonTypes } from "../../../../types/ButtonTypes";
import { StepperContext } from "../../../context/StepperContext";
import { UserContext } from "../../../context/userDataContext";
import Button from "../../Core/Button";

export default function CompanyDetails() {
  const { step, setStep } = useContext(StepperContext)
  return (
    <div className="flex-col items-center text-center justify-center">
      <div onClick={() => setStep(step + 1)}>
        <Button type={ButtonTypes.PartOfCompany} />
      </div>
      <Button type={ButtonTypes.NoPartOfCompany} />
    </div>
  )
}
