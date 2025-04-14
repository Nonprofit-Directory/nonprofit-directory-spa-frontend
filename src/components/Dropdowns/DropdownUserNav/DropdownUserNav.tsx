import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FaCircleUser } from "react-icons/fa6";
import { NavigateFunction } from "react-router-dom";

function DropdownUserNav({handleLogout, navigate}:{
    navigate: NavigateFunction,
    handleLogout: () => void
}) {
  return (
    <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="focus:outline-none cursor-pointer">
              <FaCircleUser className="text-orange-500 text-2xl bg-white rounded-full p-0.5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white border-2 border-orange-500">
            <DropdownMenuItem onClick={() => navigate("/account")}>
              Mi cuenta
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2">
              Cerrar sesión
              <FaCircleUser className="text-2xl"/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
  )
}

export default DropdownUserNav