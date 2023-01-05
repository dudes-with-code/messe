import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

interface TicketProps {
  user: any
}

export default function Ticket({ user }: TicketProps) {
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
