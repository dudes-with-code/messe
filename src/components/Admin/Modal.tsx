import React, { ReactNode, SetStateAction } from "react";
import UserType from "../../types/apiTypes";
import { trpc } from "../../utils/trpc";
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
export default function Modal({
  state,
  setState,
  header,
  content,
  saveButtonFunction,
  saveButtonText,
  user,
  refetch,
}: ModalProps) {
  const updatedUser = trpc.adminRouter.changeSpecificUserData.useMutation();
  function updateUser() {
    updatedUser.mutate({
      ...user,
      interests: {
        ...user.interests,
      },
      company: {
        ...user.company,
      },
    });
    setTimeout(() => {
      refetch();
    }, 1000);
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
              <div className="relative flex-auto p-6">{content}</div>
              {/*footer*/}
              <div className="flex items-center justify-end rounded-b border-t border-solid border-[##F1FFE7] p-6">
                <button
                  className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-[#F4F4F9] outline-none transition-all duration-150 ease-linear focus:outline-none"
                  type="button"
                  onClick={() => setState(false)}
                >
                  Close
                </button>
                <div onClick={saveButtonFunction}>
                  <button
                    className="mr-1 mb-1 rounded bg-[#2F4550] px-6 py-3 text-sm font-bold uppercase text-[#F4F4F9] shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                    onClick={() => setState(false)}
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
