import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { createContext } from "vm";
import UserType from "../../types/apiTypes";
import { trpc } from "../../utils/trpc";
import AdminHeader from "../components/Admin/AdminHeader";
import DetailTile from "../components/Admin/DetailTile/DetailTile";
import UserComponent from "../components/Admin/UserComponent/UserComponent";
import Ticket from "../components/Register/ThankYou/Ticket";
export default function Admin() {
  const allUsers = trpc.adminRouter.getAllUsers.useQuery();
  const todaysUsers = trpc.adminRouter.getAllUsersFromToday.useQuery();
  const allAssociates =
    trpc.adminRouter.getNumberOfCompanyAssociated.useQuery();
  const todaysAssociates =
    trpc.adminRouter.getNumberOfCompanyAssociatedToday.useQuery();
  const webDev = trpc.adminRouter.getNumberOfWebDevInterested.useQuery();
  const webDevToday =
    trpc.adminRouter.getNumberOfWebDevInterestedToday.useQuery();
  const cyberSec = trpc.adminRouter.getNumberOfCyberSecurityInterested.useQuery();
  const cyberSecToday =
    trpc.adminRouter.getNumberOfCyberSecurityInterestedToday.useQuery()
  const mobileDev = trpc.adminRouter.getNumberOfMobileDevInterested.useQuery()
  const mobileDevToday = trpc.adminRouter.getNumberOfMobileDevInterestedToday.useQuery()
  const design = trpc.adminRouter.getNumberOfDesignInterested.useQuery()
  const designToday = trpc.adminRouter.getNumberOfDesignInterestedToday.useQuery()
  const dataScience = trpc.adminRouter.getNumberOfDataScienceInterested.useQuery()
  const dataSienceToday = trpc.adminRouter.getNumberOfDataScienceInterestedToday.useQuery()
  const coding = trpc.adminRouter.getNumberOfCodingInterested.useQuery()
  const codingToday = trpc.adminRouter.getNumberOfCodingInterestedToday.useQuery()
  const { data: session } = useSession();
  function refetchUsers() {
    allUsers.refetch()
  }
  const [showTicketModal, setShowTicketModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  function toggleEditModal () {
    setShowEditModal(true)
  }
  function showTicket (givenUser: any) {
    
      setShowTicketModal(true)
   
    
  }
  if (!session) {
    return <AdminHeader />;
  }
  return (
    <div>
      <>
        <AdminHeader />

        <div className="m-5 grid grid-cols-6 grid-rows-2 gap-3.5">
          <div className="col-start-1 flex col-end-3 baseline-center items-center">
            <h1 className="text-5xl">Hello Admin!</h1>
          </div>
          <div className="col-start-5">
            {allUsers.isSuccess &&
              <DetailTile title="Total Users" totalNum={allUsers.data.length} dailyChange={todaysUsers.data?.length} />
            }
          </div>
          <div className="col-start-6">
            {(allAssociates.isSuccess && todaysAssociates.isSuccess) &&
              <DetailTile
                title="Company Associated"
                totalNum={allAssociates?.data.length}
                dailyChange={todaysAssociates.data.length}
              />
            }
          </div>
          <div className="col-start-1 row-start-2">
            {(webDev.isSuccess && webDevToday.isSuccess) &&
              <DetailTile title="Web Dev" totalNum={webDev.data[0]?._count.userID} dailyChange={webDevToday.data.length} />
            }
          </div>
          <div className="col-start-2 row-start-2">
            {(cyberSec.isSuccess && cyberSecToday.isSuccess) &&
              <DetailTile title="Cyber Sec" totalNum={cyberSec.data[0]?._count.userID} dailyChange={cyberSecToday.data.length} />
            }
          </div>
          <div className="col-start-3 row-start-2">
            {(mobileDev.isSuccess && mobileDevToday.isSuccess) &&
              <DetailTile title="Mobile Dev" totalNum={mobileDev.data[0]?._count.userID} dailyChange={mobileDevToday.data.length} />
            }
          </div>
          <div className="col-start-4 row-start-2">
            {(design.isSuccess && designToday.isSuccess) &&
              <DetailTile title="Design" totalNum={design.data[0]?._count.userID} dailyChange={designToday.data.length} />
            }
          </div>
          <div className="col-start-5 row-start-2">
            {(dataScience.isSuccess && dataSienceToday.isSuccess) &&
              <DetailTile title={"Data Science"} totalNum={dataScience.data[0]?._count.userID} dailyChange={dataSienceToday.data.length} />
            }
          </div>
          <div className="col-start-6 row-start-2">
            {(coding.isSuccess && codingToday.isSuccess) &&
              <DetailTile title="Coding" totalNum={coding.data[0]?._count.userID} dailyChange={codingToday.data.length} />
            }
          </div>
        </div>
        <div className="grid grid-cols-12  mb-5 mt-16">
          <div className="col-start-2 pl-10">Name</div>
          <div className="col-start-5 col-end-7 pl-10 flex">Date Registered</div>
          <div className="col-start-8">Company</div>

          <div className="h-0.5 col-start-1 mt-3 col-end-13 bg-gray-500">
          </div>
        </div>
        {allUsers.data?.map((user) => {
          return (<div>
            <UserComponent key={user.id} refetch={refetchUsers} user={user} showTicket={() => showTicket(user)} showEdit={toggleEditModal}/>
            <div className="col-start-1 col-end-13 h-0.5 bg-gray-300 my-4">
            </div>

          </div>)
        }, [allUsers])}
      </>
      {showTicketModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Ticket
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowTicketModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                 Ticket
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowTicketModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowTicketModal(false)}
                  >
                    Save Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showEditModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Edit User Information
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowEditModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                 Edit User Information
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowEditModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowEditModal(false)}
                  >
                    Save User Data
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};


