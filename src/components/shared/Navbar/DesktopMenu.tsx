// src/components/shared/DesktopMenu.tsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "@/lib/authStore";
import DropdownUserNav from "@/components/Dropdowns/DropdownUserNav/DropdownUserNav";
import { menuItems } from "./menuItems";

interface DesktopMenuProps {
  isSticky: boolean;
}

export function DesktopMenu({ isSticky }: DesktopMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="hidden sm:flex h-full items-stretch">
      {menuItems.map(({ title, link }, i) => {
            const isActive = location.pathname === link;
            return (
              <div
                key={i}
                className={`
                  relative px-4 h-full flex items-center justify-center
                  ${isActive
                    ? "bg-[var(--propel-clay-gray)] text-[var(--propel-rich-green)] font-semibold"
                    : "text-white"}
                  ${!isSticky ? "rounded-t-2xl" : "rounded-4xl"}
                `}
              >
                {!isSticky && isActive && (
                  <>
                    <span className="absolute -bottom-0 left-[-14px] w-4 h-4 bg-[var(--propel-clay-gray)]" />
                    <span className="absolute -bottom-0 left-[-16px] w-4 h-4 bg-[var(--propel-rich-green)] rounded-br-full" />
                    <span className="absolute -bottom-0 right-[-14px] w-4 h-4 bg-[var(--propel-clay-gray)]" />
                    <span className="absolute -bottom-0 right-[-16px] w-4 h-4 bg-[var(--propel-rich-green)] rounded-bl-full" />
                  </>
                )}
                <Link to={link}>{title}</Link>
              </div>
            );
          })}

      {/* Aquí reincorporamos tu DropdownUserNav */}
      <div className="h-full px-4 flex items-center justify-center relative">
        <DropdownUserNav navigate={navigate} handleLogout={handleLogout} />
      </div>
    </div>
  );
}
