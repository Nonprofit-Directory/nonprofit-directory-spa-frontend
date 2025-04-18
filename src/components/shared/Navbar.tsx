import { useState } from "react";
// import { FaProductHunt } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../lib/authStore";
import { useStickyObserver } from "@/hooks/navbar/useStickyObserver";
import { DesktopMenu } from "./Navbar/DesktopMenu";
import { MobileMenuDrawer } from "./Navbar/MobileMenuDrawer";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();
  const isSticky = useStickyObserver();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav
        className={`
          bg-[var(--propel-rich-green)] text-white flex justify-between items-center
          h-[50px] pt-1.5 sticky top-0 z-50 ${
            isSticky ? "pb-1.5 shadow-md" : ""
          }
        `}
      >
        <div className="flex items-center gap-2 px-4">
          {/* <FaProductHunt className="text-3xl text-orange-500" />
          <h1 className="text-2xl hidden md:block">
            Propel <span className="font-light">Directory</span>
          </h1> */}
          <div className="cont relative w-full">
            <img
              src="https://cdn.prod.website-files.com/6149758b856b3d63d914d5a8/6177d4b4c4773970200f540b_Propel_Logo.svg"
              alt="Propel"
              className="w-20 h-20"
            />
            <h1 className="text-3xl absolute top-5 left-8 flex gap-3">
              Propel <span className="font-light">Directory</span>
            </h1>
          </div>
        </div>

        {/* Menú de escritorio */}
        <DesktopMenu isSticky={isSticky} />

        {/* Botón hamburguesa móvil */}
        <button
          className="sm:hidden pr-4 text-[30px] cursor-pointer"
          onClick={() => setIsMobileOpen(true)}
        >
          <TiThMenu />
        </button>
      </nav>

      {/* Drawer móvil */}
      <MobileMenuDrawer
        open={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onLogout={handleLogout}
      />
    </>
  );
}
