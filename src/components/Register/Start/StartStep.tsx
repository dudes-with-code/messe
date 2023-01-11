import { ButtonTypes } from "../../../types/ButtonTypes";

import Button from "../../Core/Button";

export default function StartStep() {
  return (
    <div>
      <div className="p-5 pt-48">
        <h1 className="text-3xl font-bold text-slate-200">
          Lightning Technologies
        </h1>
      </div>
      <div className=" flex items-center justify-center pt-28 text-center text-slate-200">
        <p className="w-1/2 text-center">
          High Quality IT developed with lightning speed
        </p>
      </div>
      <div className="mt-16 flex w-full items-center justify-center">
        <Button type={ButtonTypes.Start} />
      </div>
    </div>
  );
}
