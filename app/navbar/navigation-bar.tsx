import Link from "next/link"

const NavigationBar = () => {
  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"> {/*Center in nav-bar*/}
      <nav className=" md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="https://apps.apple.com/us/app/lift-card-social-fitness-app/id6449883528">
            <h1 className="mr-5 hover:text-gray-900">Download </h1> {/*Download links to apple store*/}
            </Link>
            <h1 className="mr-5 hover:text-gray-900">Contact Us </h1>
       </nav>
  
    </div>
  )
}

export default NavigationBar