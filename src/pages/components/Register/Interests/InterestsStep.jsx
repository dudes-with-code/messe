import { useContext } from "react";
import { UserContext } from "../../../context/userDataContext";

export default function InterestsStep() {
  const { user, setUser } = useContext(UserContext);
  const interests = user.interests;
  function handleClick(e) {
    //ts-ignore
    setUser((user) => ({
      ...user,
      interests: {
        ...interests,
        [e.target.innerHTML]: !interests[e.target.innerHTML],
      },
    }));
  }
  return (
    <div>
      <h1 className="align-center mb-18 h-28 justify-center pt-44 text-center text-4xl font-bold text-slate-200">
        Interests
      </h1>
      <div className="mt-28 flex flex-wrap items-center justify-center gap-3.5">
        {Object.keys(interests).map((key) => {
          return (
            <button
              key={key}
              data-item={key}
              className={
                interests[key]
                  ? "flex w-auto  content-center justify-between rounded-2xl bg-[#F1FFE7] p-2.5 text-[#2F4550]"
                  : "flex w-auto content-center justify-between rounded-2xl bg-[#F4F4F9]  p-2.5 text-[#2F4550]"
              }
              onClick={handleClick}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
}
