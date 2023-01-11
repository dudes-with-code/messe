import { useContext } from "react";
import type UserType from "../../../types/apiTypes";
import { UserContext } from "../../../lib/context/userDataContext";

export default function PersonalDataStep() {
  const { user, setUser } = useContext(UserContext);

  async function handleFirstNameChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    await setUser((user: UserType) => ({
      ...user,
      firstName: event.target.value,
    }));
  }
  async function handleLastNameChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    await setUser((user: UserType) => ({
      ...user,
      lastName: event.target.value,
    }));
  }
  async function handleMailChange(event: React.ChangeEvent<HTMLInputElement>) {
    await setUser((user: UserType) => ({
      ...user,
      mail: event.target.value,
    }));
  }

  return (
    <div className="align-center h-full w-full flex-col items-center justify-center pt-24">
      <h1 className="align-center mb-18 h-28 justify-center text-center text-4xl font-bold text-slate-200">
        Personal
      </h1>
      <div className="  flex items-center justify-center">
        <input
          type="text"
          value={user.firstName}
          placeholder="First Name"
          onChange={handleFirstNameChange}
          className="m-3.5 border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-white"
          required
        />
      </div>
      <div className="m-5 flex items-center justify-center ">
        <input
          type="text"
          value={user.lastName}
          placeholder="Last Name"
          onChange={handleLastNameChange}
          className="m-3.5 border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-white"
          required
        />
      </div>
      <div className="m-5 flex items-center justify-center">
        <input
          type="text"
          value={user.mail}
          placeholder="eMail"
          onChange={handleMailChange}
          className="m-3.5 border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-white"
          required
        />
      </div>
    </div>
  );
}
