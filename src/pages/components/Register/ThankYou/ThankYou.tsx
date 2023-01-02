import { PDFDownloadLink, Text } from "@react-pdf/renderer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useContext, useEffect } from "react";
import { HiOutlineTicket } from "react-icons/hi";

import { ButtonTypes } from "../../../../types/ButtonTypes";

import { UserContext } from "../../../context/userDataContext";

import Button from "../../Core/Button";
import Ticket from "./Ticket";

export default function ThankYou() {
  const { user, setUser } = useContext(UserContext);
  function printTicket() {
    const ticket = document.getElementById("ticket");
    if (ticket != null) {
      html2canvas(ticket).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          format: [270, 95],
        });
        pdf.addImage(imgData, "JPEG", 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      });
    }
  }
  return (
    <div>
      <h1 className="align-center mb-18 h-28 justify-center pt-44 text-4xl font-bold text-slate-200">
        Thank You <br />
        {user.firstName}!
      </h1>

      <div id="ticket" className="mt-40 flex rounded-md bg-slate-200 p-5">
        <Ticket />
      </div>
      <div className="mt-16 flex w-full items-center justify-center">
        <div onClick={printTicket}>
          <Button type={ButtonTypes.CompleteRegistration} />
        </div>
      </div>
    </div>
  );
}
