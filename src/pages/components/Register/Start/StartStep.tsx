import { useContext } from "react";
import { ButtonTypes } from "../../../../types/ButtonTypes";
import { StepperContext } from "../../../context/StepperContext";
import TopLeftSVG from "../../BackgroundSVGs/Start/top-left-start";
import Button from "../../Core/Button";

export default function StartStep() {
  const { step, setStep } = useContext(StepperContext);
  return (
    <div>
      <div className="pt-48 pl-8">
        <h1 className="text-3xl font-bold text-slate-200">Company</h1>
      </div>
      <div className=" flex items-center justify-center pt-36 text-center text-slate-200">
        <p className="w-1/2 text-justify text-base">
          Lo[rem ipsum dolor, sit amet consectetur adipisicing elit. Ab
          exercitationem eius atque, placeat fugiat saepe! .]
        </p>
      </div>
      <div className="mt-16 flex w-full items-center justify-center">
        <Button type={ButtonTypes.Start} />
      </div>
    </div>
  );
}
