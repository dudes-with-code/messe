import { useContext, useEffect } from "react";
import { trpc } from "../../../../utils/trpc";
import { UserContext } from "../../../context/userDataContext";
import { NewUser } from "../../../user/user";

export default function ThankYou() {
  const { user, setUser } = useContext(UserContext);
  const mutation = trpc.userData.createUser.useMutation();
  useEffect(() => {
    mutation.mutate({
      mail: user.mail,
      firstName: user.firstName,
      lastName: user.lastName,
      picture: user.picture,
      interests: {
        webDevelopment: user.interests.webDevelopment,
        cyberSecurity: user.interests.cyberSecurity,
        mobileDev: user.interests.mobileDev,
        design: user.interests.design,
        dataScience: user.interests.dataScience,
        coding: user.interests.coding,
      },
      company: {
        isAssociated: user.company.isAssociated,
        companyEmail: user.company.companyEmail,
        companyName: user.company.companyName,
      },
    });
    const cleanUser = NewUser;
    setUser(cleanUser);
  }, []);

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
  );
}
