import { Page, Document } from "@react-pdf/renderer";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

interface TicketProps {
  user: any;
}
loadGetInitialProps(ReprintableTicket, {});
function ReprintableTicket({ user }: TicketProps) {
  return (
    <div className="">
      <Document>
        <Page>
          <div className="baseline-center flex max-w-xs">
            {user.picture != undefined ? (
              <img
                src={user.picture}
                width={64}
                height={64}
                className="rounded-md"
              />
            ) : null}
            <div className="pl-5">
              {user.lastName && user.firstName ? (
                <p className="text-2xl font-bold">
                  {user.lastName}, {user.firstName}{" "}
                </p>
              ) : null}

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
export default ReprintableTicket;
