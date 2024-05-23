
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"


const RegisterTab = () => {
  return (
    <div className="bg-blue-300 justify-center pt-10 w-full text-center flex p-5">
        <div className="space-y-4">
        
        <h1 className="text-6xl"> LiftCard</h1>
        <p className="p-3">The fitness social media app</p>

            <div className="bg-white rounded-[15px] shadow-lg p-5 px-10 w-[500px] duration-200 text-center space-y-7 justify-center ">
                <h1 className="text-3xl text-left">Register</h1>
                <Input type="name" placeholder="First" className="w-full" /> {/*Utilize shadcn for input box*/}
                <Input type="name" placeholder="Last" className="w-full" />
                <Input type="email" placeholder="Email" className="w-full" />
                <Input type="password" placeholder="Password" className="w-full" />
                <Button className="text-md bg-blue-500">Join Now</Button>
                <p> Already on LiftCard? <Link href="/login" className="text-blue-300">Log In </Link> </p> {/*Link to login if they have account*/}

            </div>
    
        </div>
      
    </div>
  )
}

export default RegisterTab
