import { Button } from "@/components/ui/button"

import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet" 

import { AlignJustify } from "lucide-react"

import Link from "next/link"


const ActionButtons = () => {
  return (
    <div>
      <div className="md:hidden">  {/*creates dropdown menu for buttons when tab is made smaller*/}
        <Sheet>
          <SheetTrigger>    
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-cal space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href="/login"> Log In
                  </Link>
                </div>
                <div className="flex flex-cal space-y-4 items-start w-full text-lg text-black mt-10">
                  <Link href="/register"> Get Started
                  </Link>
                </div>

              </SheetDescription>
            </SheetHeader>

          </SheetContent>
        </Sheet>

      </div>

        <div className="hidden md:flex md:space-x-4">
                <Button
                className="text-md"
                variant="ghost"
                >
                  <Link href="/login">Log In</Link> {/*creates Log In Button*/}
                    
                </Button>
                <Button
                className="text-md bg-blue-500">
                    <Link href="/register"> Get Started</Link> {/*creates Get Started Button*/}
                </Button>

        </div>
    </div>
  )
}

export default ActionButtons
