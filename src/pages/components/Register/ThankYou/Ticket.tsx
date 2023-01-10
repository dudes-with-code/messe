import {
  Page,

  Document,

} from "@react-pdf/renderer";


interface TicketProps {
  user: any
}


import { useContext } from "react";
import { UserContext } from "../../../../lib/context/userDataContext";

export default function Ticket(

) {
  const { user} = useContext(UserContext);

  return (
    <div className="">
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
  );
}
