
interface UserComponentProps {
  user: {
    lastName: string;
    firstName: string;
    mail: string;
    picture: string;
    id: number,
    createdAt: any,
    interests: {
      userID: number,
      webDevelopment: boolean;
      cyberSecurity: boolean;
      mobileDev: boolean;
      design: boolean;
      dataScience: boolean;
      coding: boolean;
    } | null;
    company: {
      userID: number,
      isAssociated: boolean;
      companyName: string;
      companyEmail: string;
    } | null;
  }
}




export default function UserComponent({ user }: UserComponentProps) {
  return (
    <div className="mb-5 mx-14 grid grid-cols-12">
      <div className="w-14 h-14 overflow-hidden rounded-full items-center justify-center flex row-span-2">
        <img src={user.picture} className="w-full h-full" alt="UserPicture" />
      </div>
      <div className="col-start-2 ">
        <h1 className=" flex w-32 mt-1.5">{user.firstName} {user.lastName}</h1>
        <h3 className=" -mt-1 text-gray-500">{user.mail}</h3>
      </div>
      <div className="col-start-5 col-end-7 flex items-center justify-center">
        {user.createdAt.toString().slice(0, 15)}
      </div>
      <div className="col-start-8 flex items-center justify-center">
        {user.company?.isAssociated ? user.company.companyName : "-"}
      </div>
      <div className="col-start-10 flex items-center justify-center">
        Ticket
      </div>
      <div className="col-start-11 flex items-center justify-center">
        Edit
      </div>
      <div className="col-start-12 flex items-center justify-center">
        Delete
      </div>

    </div>
  )
}
