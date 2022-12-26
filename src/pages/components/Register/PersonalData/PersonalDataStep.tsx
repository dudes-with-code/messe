import { useContext, useState } from "react";
import { UserContext } from "../../../context/userDataContext";

export default function PersonalDataStep() {
  const { user, setUser } = useContext(UserContext);
  async function handleFirstNameChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    await setUser((user: any) => ({
      ...user,
      firstName: event.target.value,
    }));
  }
  async function handleLastNameChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    await setUser((user: any) => ({
      ...user,
      lastName: event.target.value,
    }));
  }
  function handleClick() {
    console.log(user);
  }
  return (
    <div className="flex-col">
      <input
        type="text"
        value={user.firstName}
        placeholder="First Name"
        onChange={handleFirstNameChange}
        className="m-3.5"
      />
      <input
        type="text"
        value={user.lastName}
        placeholder="Last Name"
        onChange={handleLastNameChange}
        className="m-3.5"
      />
      <button onClick={handleClick} className="m-3.5">
        Update State
      </button>
    </div>
  );
}
