import { useContext } from "react"
import { UserContext } from "../../../context/userDataContext"

export default function ThankYou() {
  const { user, setUser } = useContext(UserContext)
  return (
    <div>
      <h1 className="align-center mb-18 h-28 justify-center pt-44 text-4xl font-bold text-slate-200">
        Thank You <br />
        {user.firstName}!
      </h1>

      <div className="mt-44 flex flex-wrap items-center justify-center gap-3.5">
        Here downloadable ticket loool
      </div>
    </div>
  )
}
