import { useContext, useRef } from "react"
import { AiOutlineCloudUpload } from "react-icons/ai"
import type UserType from "../../../../types/apiTypes"
import { UserContext } from "../../../../lib/context/userDataContext"





export default function ImageUpload() {
  const { setUser } = useContext(UserContext)
  const inputRef = useRef<HTMLInputElement>(null)
  function handlePictureUpload() {
    //@ts-ignore
      inputRef.current.click()
    
      
    
    
  }
  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader()
    reader.onloadend = () => {
      console.log(reader.result)
      setUser((user: UserType) => ({
        ...user,
        picture: reader.result
      }))
    }
    // @ts-ignore
    reader.readAsDataURL(event.target.files[0])
  }
  return (
    <div>
      <div className="items-center justify-center flex">
        <div onClick={handlePictureUpload} className="border-dashed border-[#F4F4F9] border-2 rounded-full w-44 h-44 baseline-center items-center justify-center">
          <AiOutlineCloudUpload size={64} className="mx-auto mt-14" color="#F4F4F9" />
          <input type="file" ref={inputRef} className="w-full h-full" style={{ display: 'none' }} onChange={handleFileUpload} />
        </div>
      </div>

      <p className="text-sm mt-3 text-[#F4F4F9]">Upload</p>
    </div>
  )
}

