import { useContext, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import type UserType from "../../../types/apiTypes";
import { UserContext } from "../../../lib/context/userDataContext";

export default function ImageUpload() {
  const { setUser } = useContext(UserContext);
  const inputRef = useRef<HTMLInputElement>(null);
  function handlePictureUpload() {
    //@ts-ignore
    inputRef.current.click();
  }
  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);
      setUser((user: UserType) => ({
        ...user,
        picture: reader.result,
      }));
    };
    // @ts-ignore
    reader.readAsDataURL(event.target.files[0]);
  }
  return (
    <div>
      <div className="flex items-center justify-center">
        <div
          onClick={handlePictureUpload}
          className="baseline-center h-44 w-44 items-center justify-center rounded-full border-2 border-dashed border-[#F4F4F9]"
        >
          <AiOutlineCloudUpload
            size={64}
            className="mx-auto mt-14"
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

      <p className="mt-3 text-sm text-[#F4F4F9]">Upload</p>
    </div>
  );
}
