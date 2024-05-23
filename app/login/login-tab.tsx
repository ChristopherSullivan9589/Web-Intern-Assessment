import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const LogInTab = () => {
    return (
        <div className=" flex justify-center pt-10 w-full p-10">
            <div className="bg-white rounded-[15px] shadow-lg p-10 px-10 w-1/3 duration-200 text-center space-y-7"> {/*Create Log-in box*/}
                <h1 className="text-3xl text-left">Sign In</h1>
                <Input type="email" placeholder="Email" className="w-full" /> {/*Utilize shadcn components for input box*/}
                <Input type="password" placeholder="Password" className="w-full" />
                <Button className="text-md bg-blue-500">Log In</Button>
                <p> Haven't made an account? <Link href="/register" className="text-blue-300">Register here </Link> </p> {/*Link to register page*/}
            </div>
           
        </div>
    )
}

export default LogInTab