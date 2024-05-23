import NavigationBar from "./navigation-bar"
import Logo from "./logo"
import ActionButtons from "./action-buttons"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b">
        <Logo /> {/*Include Logo*/}
        <NavigationBar /> {/*Include NavigationBar*/}
        <div className="px-10"> {/* space out nicely */}
        <ActionButtons /> {/*Include action button*/}
        </div>
      
    </div>
  )
}

export default Navbar
