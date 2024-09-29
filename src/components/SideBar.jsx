import { Heart, Home } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <>
      <DesktopSidebar/>
      <MobileSidebar/>
    </>
  )
}

export default Sidebar

const MobileSidebar = () => {
  return (
    <div className="flex justify-center gap-16 fixed bottom-0 left-0 w-full p-4 bg-white shadow-lg sm:hidden z-50">
      <Link to={'/'}>
        <Home size={"24"} className="cursor-pointer"/>
      </Link>
      <Link to={'/favorites'}>
        <Heart size={"24"} className="cursor-pointer"/>
      </Link>
    </div>
  )
}


const DesktopSidebar = () => {
    return (
        <div className="p-3 md:p-10 min-h-screen w-24 md:w-64 hidden sm:block">
            <div className="flex flex-col gap-10 sticky top-10 left-0">
                <div className="w-full">
                    <img src="/htclogo.png" className="hidden md:block" />
                    <img src="/SMhtclogo.png" className="block md:hidden"/>
                </div>
                <ul className="flex flex-col items-center md:items-start gap-8">
                  <Link to={'/'} className="flex gap-2">
                    <Home size={"24"} className="cursor-pointer"/>
                    <span className="font-bold hidden md:block">Home</span>
                  </Link>
                  <Link to={'/favorites'} className="flex gap-2">
                    <Heart size={"24"} className="cursor-pointer"/>
                    <span className="font-bold hidden md:block">Favorites</span>
                  </Link>
                </ul>
            </div>
        </div>
    )
}

