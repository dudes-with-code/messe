import { useContext, useRef } from "react"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { UserContext } from "../../../context/userDataContext"





export default function ImageUpload() {
  const { user, setUser } = useContext(UserContext)
  const inputRef = useRef(null)
  function handlePictureUpload() {
    //ts-ignore
    inputRef.current.click()
  }
  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const reader = new FileReader()
    reader.onloadend = () => {
      console.log(reader.result)
      setUser((user: any) => ({
        ...user,
        picture: reader.result
      }))
    }
    //ts-ignore
    reader.readAsDataURL(event.target.files[0])
  }
  return (
    <div className="items-center justify-center flex">
      <div onClick={handlePictureUpload} className="border-dashed border-black border-2 rounded-full w-24 h-24 baseline-center items-center justify-center">
        <AiOutlineCloudUpload size={64} className="mx-auto mt-2.5" />
        <input type="file" ref={inputRef} className="w-full h-full" style={{ display: 'none' }} onChange={handleFileUpload} />
      </div>
    </div>
  )
}

