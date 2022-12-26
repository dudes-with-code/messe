import { signIn, signOut, useSession } from "next-auth/react";

export default function AdminHeader() {
  const { data: session } = useSession();

  return (
    <div className="flex w-full items-center justify-between bg-gray-500 p-5 text-white">
      <p>Admin Header</p>
      <button onClick={session ? () => signOut() : () => signIn()}>
        {session ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
}
