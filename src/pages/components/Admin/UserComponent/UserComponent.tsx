import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import { render } from "react-dom";
import { HiOutlineTicket, HiPencil, HiTrash } from "react-icons/hi";
import { trpc } from "../../../../utils/trpc";
import Ticket from "../../Register/ThankYou/Ticket";
import EditForm from "../EditUserData/EditForm";
import Modal from "../Modal";
import ReprintableTicket from "../ReprintableTicket/ReprintableTicket";
import TicketModal from "../TicketModal";
interface UserComponentProps {
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

  refetch: () => void;
}

export default function UserComponent({ user, refetch }: UserComponentProps) {
  const [changedUser, setChangedUser] = useState(user)
  const userToBeDeleted = trpc.adminRouter.deleteUserByID.useMutation();

  async function deleteUser() {
    userToBeDeleted.mutate({ id: user.id });
    setTimeout(() => {
      refetch();
    }, 1000);
  }
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  function toggleEditModal() {
    setShowEditModal(true);
  }
  function showTicket() {
    setShowTicketModal(true);
  }
  function saveTicket() {
    const ticket = document.getElementById("ticket");
    if (ticket != null) {
      html2canvas(ticket).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          format: [270, 95],
        });
        //@ts-ignore
        pdf.addImage(imgData, "JPEG", 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("Ticket.pdf");
      });
    }
  }
  
  return (
    <>
      <div className="mx-14 pb-5 grid grid-cols-12">
        <div className="row-span-2 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full">
          <img src={user.picture} className="h-full w-full" alt="UserPicture" />
        </div>
        <div className="col-start-2 ">
          <h1 className=" mt-1.5 flex w-32">
            {user.firstName} {user.lastName}
          </h1>
          <h3 className=" -mt-1 text-gray-500">{user.mail}</h3>
        </div>
        <div className="col-start-5 col-end-7 flex items-center justify-center">
          {user.createdAt.toString().slice(0, 15)}
        </div>
        <div className="col-start-8 flex items-center justify-center">
          {user.company?.isAssociated ? user.company.companyName : "-"}
        </div>
        <div className="col-start-10 flex -rotate-90 items-center justify-center">
          <HiOutlineTicket
            onClick={showTicket}
            size={22}
            className="cursor-pointer"
            color="#2F4550"
          />
        </div>
        <div className="col-start-11 flex items-center justify-center">
          <HiPencil
            onClick={toggleEditModal}
            className="cursor-pointer"
            size={22}
            color="#2F4550"
          />
        </div>
        <div className="col-start-12 flex items-center justify-center">
          <HiTrash
            onClick={deleteUser}
            className="cursor-pointer"
            size={22}
            color="#2F4550"
          />
        </div>
        {showTicketModal ? (
          <TicketModal
            state={showTicketModal}
            setState={setShowTicketModal}
            header="Ticket"
            saveButtonText="Save Ticket"
            content={<ReprintableTicket  user={user}/>}
            user={user}
            refetch={refetch}
          />
        ) : null}
        {showEditModal ? (
          <Modal
            state={showEditModal}
            setState={setShowEditModal}
            header="Edit User Data"
            saveButtonText="Save"
            user={changedUser}
            content={<EditForm user={changedUser} setUser={setChangedUser} />}
            refetch={refetch}

          />
        ) : null}
      </div>
    </>
  );
}
