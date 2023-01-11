import { Dispatch, SetStateAction, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import type UserType from "../../../types/apiTypes";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
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
loadGetInitialProps(EditForm, {});
function EditForm({ user, setUser }: EditFormProps) {
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
  const interests = {
    webDevelopment: user.interests?.webDevelopment,
    cyberSecurity: user.interests?.cyberSecurity,
    mobileDev: user.interests?.mobileDev,
    design: user.interests?.design,
    dataScience: user.interests?.dataScience,
    coding: user.interests?.coding,
  };
  async function handleInterestChange() {
    await setUser((user: any) => ({
      ...user,
      interests: {
        ...interests,
      },
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
        <div className="flex h-full items-center justify-center align-baseline">
          <h1 className="font-bold">Photo</h1>
          <div className="ml-16 flex w-full items-center justify-around align-baseline">
            {user.picture != "" && (
              <div>
                {" "}
                <div className="mb-5 flex-col items-center justify-center align-baseline">
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
            <div className="grid grid-cols-3 grid-rows-2">
              <label className="">
                WebDev
                <input
                  id="webDevelopment"
                  type="checkbox"
                  className="ml-2"
                  onClick={() =>
                    (interests.webDevelopment = !interests.webDevelopment)
                  }
                  onChange={handleInterestChange}
                  checked={interests.webDevelopment}
                />
              </label>
              <label className="">
                Design
                <input
                  id="webDevelopment"
                  type="checkbox"
                  className="ml-2"
                  onClick={() => (interests.design = !interests.design)}
                  onChange={handleInterestChange}
                  checked={interests.design}
                />
              </label>
              <label className="">
                CyberSec
                <input
                  id="webDevelopment"
                  type="checkbox"
                  className="ml-2"
                  onClick={() =>
                    (interests.cyberSecurity = !interests.cyberSecurity)
                  }
                  onChange={handleInterestChange}
                  checked={interests.cyberSecurity}
                />
              </label>
              <label className="">
                MobileDev
                <input
                  id="webDevelopment"
                  type="checkbox"
                  className="ml-2"
                  onClick={() => (interests.mobileDev = !interests.mobileDev)}
                  onChange={handleInterestChange}
                  checked={interests.mobileDev}
                />
              </label>
              <label className="">
                Coding
                <input
                  id="webDevelopment"
                  type="checkbox"
                  className="ml-2"
                  onClick={() => (interests.coding = !interests.coding)}
                  onChange={handleInterestChange}
                  checked={interests.coding}
                />
              </label>
              <label className="">
                DataScience
                <input
                  id="webDevelopment"
                  type="checkbox"
                  className="ml-2"
                  onClick={() =>
                    (interests.dataScience = !interests.dataScience)
                  }
                  onChange={handleInterestChange}
                  checked={interests.dataScience}
                />
              </label>
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

export default EditForm;
