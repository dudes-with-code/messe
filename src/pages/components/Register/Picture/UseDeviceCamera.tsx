import { useContext, useRef } from "react"
import { AiFillCamera } from "react-icons/ai"
import { UserContext } from "../../../context/userDataContext"





export default function UseDeviceCamera() {
  const { user, setUser } = useContext(UserContext)
  const inputRef = useRef(null)
  function handleCameraOpen() {
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
      <div onClick={handleCameraOpen} className="">
        <AiFillCamera size={64} />
        <input type="file" ref={inputRef} onChange={handleFileUpload} accept="image/*" capture="user" className="overflow-hidden hidden" />
      </div>
    </div>
  )
}
