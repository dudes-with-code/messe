import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { render } from "react-dom";
import { HiOutlineTicket, HiPencil, HiTrash } from "react-icons/hi"
import { trpc } from "../../../../utils/trpc";
import Ticket from "../../Register/ThankYou/Ticket";
import Modal from "../Modal";
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
  },

  refetch: () => void,

}




export default function UserComponent({ user, refetch}: UserComponentProps) {

  const userToBeDeleted = trpc.adminRouter.deleteUserByID.useMutation()


  async function deleteUser() {
    userToBeDeleted.mutate({ id: user.id })
    setTimeout(() => {
      refetch()
    }, 1000)




  }
  const [showTicketModal, setShowTicketModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  function toggleEditModal () {
    setShowEditModal(true)
  }
  function showTicket (givenUser: any) {
    
      setShowTicketModal(true)
   
    
  }
  return (
    <>
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
      <div className="-rotate-90 col-start-10 flex items-center justify-center">
        <HiOutlineTicket onClick={() => showTicket(user)} size={22} className="cursor-pointer" color="#2F4550" />
      </div>
      <div className="col-start-11 flex items-center justify-center">
        <HiPencil onClick={toggleEditModal} className="cursor-pointer" size={22} color="#2F4550" />
      </div>
      <div className="col-start-12 flex items-center justify-center">
        <HiTrash onClick={deleteUser} className="cursor-pointer" size={22} color="#2F4550" />
      </div>
      <div id="ticket" className="hidden">
        <Ticket user={user} />
      </div>
    </div>
    {showTicketModal ? (<Modal state={showTicketModal}  setState={setShowTicketModal} header="Ticket" saveButtonText="Save Ticket" content="test" />) : null }
      {showEditModal ? (<Modal state={showEditModal}  setState={setShowEditModal} header="Edit User Data" saveButtonText="Save" content="User Data Test" />) : null }
    </>
  )
}


