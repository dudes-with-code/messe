
import { useSession, signIn, signOut } from "next-auth/react";

const Home = () => {
    const { data: session } = useSession()
    if (!session) {
        return (
            <button onClick={() => signIn()}>Log In</button>
        )
    }
    return (

        <div>
            <p>Hello world </p>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    )

}
export default Home;



