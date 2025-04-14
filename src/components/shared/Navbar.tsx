// src/components/shared/Navbar.tsx
import { useAuthStore } from "../../lib/authStore";
import { Link, useLocation, useNavigate,} from "react-router-dom";
import { FaProductHunt } from "react-icons/fa6";
import DropdownUserNav from "../Dropdowns/DropdownUserNav/DropdownUserNav";

const Navbar = () => {
  const logout = useAuthStore((state) => state.logout);
  // const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const menuItems = [
    { title: "Home", link: "/home" },
    { title: "Profile", link: "/profile" },
    { title: "Explore Data", link: "/explore" },
  ];

  return (
    <nav className="bg-[var(--propel-rich-green)] text-white flex justify-between items-center h-[50px] pt-1.5 sticky top-0">
      <span className="font-semibold flex items-center gap-2 px-4">
        {/* Icono aqui */}
        <FaProductHunt className="text-3xl text-orange-500" />
        <h1 className="text-2xl hidden md:block">Propel <span className="font-light">Directory</span></h1>
      </span>
      <div className=" h-full section-items flex gap-3 justify-content-end items-center mr-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.link;
          return (
            <div
              key={item.link}
              className={`relative w-full h-full px-4 flex items-center justify-center rounded-t-2xl ${
                isActive
                  ? "bg-[var(--propel-clay-gray)] text-[var(--propel-rich-green)] font-semibold"
                  : "text-white"
              }`}
            >
              {isActive && (
                <>
                  <span className="absolute -bottom-0 left-[-14px] w-4 h-4 bg-[var(--propel-clay-gray)] z-0" />
                  <span className="absolute -bottom-0 left-[-16px] w-4 h-4 bg-[var(--propel-rich-green)] z-0 rounded-br-full" />
                  {/* Rigth */}
                  <span className="absolute -bottom-0 right-[-14px] w-4 h-4 bg-[var(--propel-clay-gray)] z-0" />
                  <span className="absolute -bottom-0 right-[-16px] w-4 h-4 bg-[var(--propel-rich-green)] z-0 rounded-bl-full" />
                </>
              )}
              <Link to={item.link}>{item.title}</Link>
            </div>
          );
        })}
        <div className="nav-item w-[30%] px-1">
          <DropdownUserNav navigate={navigate} handleLogout={handleLogout} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
