import { useContext, useState } from "react";
import { UserContext } from "../../../context/userDataContext";

export default function CompanyDetailsForm() {
  const { user, setUser } = useContext(UserContext);
  const company = user.company
  async function handleNameChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    await setUser((user: any) => ({
      ...user,
      company: {
        ...company,
        companyName: event.target.value
      },
    }));
  }
  async function handleMailChange(event: React.ChangeEvent<HTMLInputElement>) {
    await setUser((user: any) => ({
      ...user,
      company: {
        ...company,
        isAssociated: true,
        companyEmail: event.target.value
      },
    }));
  }
  return (
    <div className="align-center h-full w-full flex-col items-center justify-center pt-24">
      <h1 className="align-center mb-18 h-28 justify-center text-center text-4xl font-bold text-slate-200">
        Company
      </h1>

      <div className="m-5 flex items-center justify-center ">
        <input
          type="text"
          value={user.company.companyName}
          placeholder="Company Name"
          onChange={handleNameChange}
          className="m-3.5 border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-white"
        />
      </div>
      <div className="m-5 flex items-center justify-center">
        <input
          type="text"
          value={user.company.companyEmail}
          placeholder="Company Mail"
          onChange={handleMailChange}
          className="m-3.5 border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-white"
        />
      </div>
    </div>
  );
}

