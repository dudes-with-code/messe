import { Dispatch, SetStateAction, useState } from "react";
import type UserType from "../../../../types/apiTypes";
interface EditFormProps {
  user: {
    lastName: string;
    firstName: string;
    mail: string;
    picture: string;
    id: number;
    createdAt: any;
    interests: {
      userID: number;
      webDevelopment: boolean;
      cyberSecurity: boolean;
      mobileDev: boolean;
      design: boolean;
      dataScience: boolean;
      coding: boolean;
    } | null;
    company: {
      userID: number;
      isAssociated: boolean;
      companyName: string;
      companyEmail: string;
    } | null;
  };
  setUser: Dispatch<SetStateAction<{lastName: string;
    firstName: string;
    mail: string;
    picture: string;
    id: number;
    createdAt: any;
    interests: {
      userID: number;
      webDevelopment: boolean;
      cyberSecurity: boolean;
      mobileDev: boolean;
      design: boolean;
      dataScience: boolean;
      coding: boolean;
    } | null;
    company: {
      userID: number;
      isAssociated: boolean;
      companyName: string;
      companyEmail: string;
    } | null;}>>
}

export default function EditForm({ user,setUser }: EditFormProps) {
  
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
  async function handleMailChange(event: React.ChangeEvent<HTMLInputElement>) {
    await setUser((user: any) => ({
      ...user,
      mail: event.target.value,
    }));
  }
  return (
    <div className="grid grid-rows-5 text-[#F4F4F9]">
      <div className="row-start-1 my-5">
        <div className="flex items-center justify-center">
          <h1 className="font-bold">Name</h1>
          <div className="ml-16 flex w-full items-center justify-around">
            <div className="flex align-baseline">
              <div className="">
                <input
                  type="text"
                  value={user.firstName}
                  placeholder="First Name"
                  onChange={handleFirstNameChange}
                  className="m-3.5 border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-white"
                  required
                />
              </div>
              <div className="">
                <input
                  type="text"
                  value={user.lastName}
                  placeholder="Last Name"
                  onChange={handleLastNameChange}
                  className="m-3.5 border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-white"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-start-2">Email</div>
      <div className="row-start-3">Photo</div>
      <div className="row-start-4">Interests</div>
      <div className="row-start-5">Company</div>
    </div>
  );
}
