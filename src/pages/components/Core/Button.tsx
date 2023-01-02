import { useContext, useEffect, useState } from "react";
import { ButtonTypes } from "../../../types/ButtonTypes";
import { StepperContext } from "../../context/StepperContext";
import { AiOutlineArrowRight } from "react-icons/ai";
import CircularProgress from "./CircularProgress";
import { NewUser } from "../../user/user";
import { UserContext } from "../../context/userDataContext";
import { trpc } from "../../../utils/trpc";

interface ButtonProps {
  type: ButtonTypes;
  title?: string;
}

export default function Button({ type, title }: ButtonProps) {
  const { step, setStep } = useContext(StepperContext);
  const { user, setUser } = useContext(UserContext);
  const mutation = trpc.userData.createUser.useMutation();
  function CompleteRegistration() {
    setStep(1);

    mutation.mutate({
      mail: user.mail,
      firstName: user.firstName,
      lastName: user.lastName,
      picture: user.picture,
      interests: {
        webDevelopment: user.interests.webDevelopment,
        cyberSecurity: user.interests.cyberSecurity,
        mobileDev: user.interests.mobileDev,
        design: user.interests.design,
        dataScience: user.interests.dataScience,
        coding: user.interests.coding,
      },
      company: {
        isAssociated: user.company.isAssociated,
        companyEmail: user.company.companyEmail,
        companyName: user.company.companyName,
      },
    });
    const cleanUser = NewUser;
    setUser(cleanUser);
  }
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
    case ButtonTypes.Start:
      return (
        <button
          onClick={() => setStep(step + 1)}
          className="flex w-40 content-center justify-between rounded-2xl bg-[#F4F4F9] p-2.5"
        >
          Get Started {<AiOutlineArrowRight size={26} />}
        </button>
      );
    case ButtonTypes.OpenCamera:
      return (
        <button className="baseline-center mt-5 flex w-40 content-center justify-between rounded-2xl bg-[#F4F4F9] p-2.5">
          Take a Photo{<AiOutlineArrowRight size={26} />}
        </button>
      );
    case ButtonTypes.PartOfCompany:
      return (
        <button className=" mt-5 w-72 rounded-2xl bg-[#F4F4F9] p-2.5">
          I am Part of a Company
        </button>
      );
    case ButtonTypes.NoPartOfCompany:
      return (
        <button
          className=" mt-5 w-72 rounded-2xl bg-[#F4F4F9] p-2.5"
          onClick={() => setStep(step + 2)}
        >
          I am NOT part of a Company
        </button>
      );

    case ButtonTypes.CompleteRegistration:
      return (
        <button
          className="baseline-center mt-5 flex w-40 content-center justify-between rounded-2xl bg-[#F4F4F9] p-2.5"
          onClick={CompleteRegistration}
        >
          Complete Registration & Download Ticket
        </button>
      );
    default:
      return <div>Please Provide a ButtonType</div>;
  }
}
