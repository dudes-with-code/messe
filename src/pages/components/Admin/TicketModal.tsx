import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { ReactNode, SetStateAction } from "react";
import UserType from "../../../types/apiTypes";
import { trpc } from "../../../utils/trpc";
import {
  Page,
  Document,
} from "@react-pdf/renderer";

import ReprintableTicket from "./ReprintableTicket/ReprintableTicket";
interface ModalProps {
  state: boolean;
  setState: (value: SetStateAction<boolean>) => void;
  header: string;
  content: ReactNode | any;
  saveButtonText: string;
  saveButtonFunction?: () => void;
  user?: any;
  refetch: () => void;
}
export default function TicketModal({
  setState,
  header,
  saveButtonFunction,
  saveButtonText,
  user,

}: ModalProps) {
  function printTicket() {
    const ticket = document.getElementById("ticket");
    if (ticket != null) {
      html2canvas(ticket).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          format: [100, 40],
        });
        //@ts-ignore
        pdf.addImage(imgData, "JPEG", 0, 0);
        //pdf.output('dataurlnewwindow');
        pdf.save("Ticket.pdf");
      });
    }
  }
      function closeModal () {
        printTicket()

      }
  return (
    <>
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none ">
          <div className="relative my-6 mx-auto w-auto max-w-3xl">
            {/*content*/}
            <div className="relative flex w-full flex-col rounded-lg border-0 bg-[#586F7C] shadow-lg outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between rounded-t border-b border-solid border-[##F1FFE7] p-5">
                <h3 className="text-3xl font-semibold text-[#F4F4F9]">
                  {header}
                </h3>
                <button
                  className="float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none text-[#F4F4F9] opacity-5 outline-none focus:outline-none"
                  onClick={() => setState(false)}
                >
                  <span className="block h-6 w-6 bg-transparent text-2xl text-[#F4F4F9] opacity-5 outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative flex-auto p-6" id="ticket">
                <div id="">
                <div id="t">
        <Document>
          <Page>
            <div className="baseline-center flex max-w-xs">
              <img
                src={user.picture}
                width={64}
                height={64}
                className="rounded-md"
              />
              <div className="pl-5">
                <p className="text-2xl font-bold">
                  {user.lastName}, {user.firstName}
                </p>
                {user.company.isAssociated && (
                  <p>
                    <span className="font-bold">Company:</span>{" "}
                    {user.company.companyName}
                  </p>
                )}
              </div>
            </div>
          </Page>
        </Document>
      </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end rounded-b border-t border-solid border-[##F1FFE7] p-6">
                <button
                  className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-[#F4F4F9] outline-none transition-all duration-150 ease-linear focus:outline-none"
                  type="button"
                  onClick={() => setState(false)}
                >
                  Close
                </button>
                <div>
                  <button
                    className="mr-1 mb-1 rounded bg-[#2F4550] px-6 py-3 text-sm font-bold uppercase text-[#F4F4F9] shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={printTicket}
                  >
                    {saveButtonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </>
    </>
  );
}
