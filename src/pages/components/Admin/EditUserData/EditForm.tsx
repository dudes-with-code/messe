import { Dispatch, SetStateAction, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
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
  setUser: Dispatch<
    SetStateAction<{
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
    }>
  >;
}

export default function EditForm({ user, setUser }: EditFormProps) {
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
  const inputRef = useRef<HTMLInputElement>(null);
  function handlePictureUpload() {
    //@ts-ignore
    inputRef.current.click();
  }
  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);
      setUser((user: any) => ({
        ...user,
        picture: reader.result,
      }));
    };
    // @ts-ignore
    reader.readAsDataURL(event.target.files[0]);
  }
  async function removePicture() {
    await setUser((user: any) => ({
      ...user,
      picture: "",
    }));
  }
  async function handleInterestChange(interest: string) {
   
    await setUser((user: any) => ({
      ...user,
      interests: {
        ...user.interests,
        interest: !interest
      }
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
                  className="m-3.5 border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-center text-white"
                  required
                />
              </div>
              <div className="">
                <input
                  type="text"
                  value={user.lastName}
                  placeholder="Last Name"
                  onChange={handleLastNameChange}
                  className="m-3.5 border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-center text-white"
                  required
                />
              </div>
            </div>
          </div>
        </div>

      </div>
      
      <div className="row-start-2">
        <div className="flex items-center justify-center">
          <h1 className="font-bold">Email</h1>
          <div className="ml-16 flex w-full items-center justify-around">
            <div className="flex align-baseline">
              <div className="w-full items-center text-center">
                <input
                  type="email"
                  value={user.mail}
                  placeholder="eMail"
                  onChange={handleMailChange}
                  className="my-3.5 w-full border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-center text-white"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row-start-3">
        <div className="flex items-center justify-center align-baseline h-full">
          <h1 className="font-bold">Photo</h1>
          <div className="ml-16 flex w-full items-center justify-around align-baseline">
            {user.picture != "" && (
              <div>
                {" "}
                <div className="flex-col items-center justify-center align-baseline mb-5">
                  <button
                    className="p-auto relative top-5 h-5 w-5 rounded-full bg-slate-200 text-xs text-black"
                    onClick={removePicture}
                  >
                    X
                  </button>
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full">
                    <img
                      src={user.picture}
                      className="h-full w-full"
                      alt="UserPicture"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex align-baseline">
              <div
                onClick={handlePictureUpload}
                className="baseline-center h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-[#F4F4F9]"
              >
                <AiOutlineCloudUpload
                  size={22}
                  className="mx-auto mt-5"
                  color="#F4F4F9"
                />
                <input
                  type="file"
                  ref={inputRef}
                  className="h-full w-full"
                  style={{ display: "none" }}
                  onChange={handleFileUpload}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
   
      <div className="row-start-4">
        <div className="flex items-center justify-center">
          <h1 className="font-bold">Interests</h1>
          <div className="ml-16 flex w-full items-center justify-around">
            <div className="flex align-baseline">
             <input type="checkbox" onChange={() => handleInterestChange("webDevelopment")} />
              
            </div>
          </div>
        </div>
      </div>

      <div className="row-start-5">
        <div className="flex items-center justify-center">
          <h1 className="font-bold">Company</h1>
          <div className="ml-16 flex w-full items-center justify-around">
            <div className="flex align-baseline">
              <div className="">
                <input
                  type="text"
                  value={user.company?.companyName}
                  placeholder="First Name"
                  onChange={handleFirstNameChange}
                  className="m-3.5 border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-center text-white"
                  required
                />
              </div>
              <div className="">
                <input
                  type="email"
                  value={user.company?.companyEmail}
                  placeholder="Company eMail"
                  onChange={handleLastNameChange}
                  className="m-3.5 border-t-0 border-l-0 border-r-0 border-b-2 border-[#F1FFE7] bg-transparent text-center text-white"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
