import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FaUser } from "react-icons/fa6";
import { NavigateFunction } from "react-router-dom";

function DropdownUserNav({handleLogout, navigate}:{
    navigate: NavigateFunction,
    handleLogout: () => void
}) {
  return (
    <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer">
            <button className="focus:outline-none cursor-pointer border-none rounded-full overflow-hidden bg-green-800 w-10 h-10 p-2 mb-2 relative">
              <FaUser className="text-white text-2xl absolute z-20 top-3.5 right-2"/>
              {/* <div className="bg-white absolute w-[25px] h-[10px] z-10 bottom-0  border-2"></div> */}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white mt-2 cursor-pointer">
            <DropdownMenuItem onClick={() => navigate("/account")} className="cursor-pointer">
              Mi cuenta
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 cursor-pointer">
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default DropdownUserNav