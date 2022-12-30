import { useContext, useEffect } from "react";

import { ButtonTypes } from "../../../../types/ButtonTypes";

import { UserContext } from "../../../context/userDataContext";

import Button from "../../Core/Button";

export default function ThankYou() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1 className="align-center mb-18 h-28 justify-center pt-44 text-4xl font-bold text-slate-200">
        Thank You <br />
        {user.firstName}!
      </h1>

      <div className="mt-44 flex flex-wrap items-center justify-center gap-3.5">
        <img src={user.picture} height={64} width={64} />
      </div>

      <Button type={ButtonTypes.CompleteRegistration} />
    </div>
  );
}
