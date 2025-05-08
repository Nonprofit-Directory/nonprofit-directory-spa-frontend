// src/components/shared/DesktopMenu.tsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import DropdownUserNav from "@/components/Dropdowns/DropdownUserNav/DropdownUserNav";
import { menuItems } from "./menuItems";

interface DesktopMenuProps {
  isSticky: boolean;
  handleLogout: () => Promise<void>
}

export function DesktopMenu({ isSticky, handleLogout }: DesktopMenuProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="hidden sm:flex h-full items-end">
      {menuItems.map(({ title, link }, i) => {
            const isActive = location.pathname === link;
            return (
              <div
                key={i}
                className={`
                  relative px-4 h-[70%] flex items-center justify-center font-extralight
                  ${isActive
                    ? "bg-[var(--propel-clay-gray)] text-[var(--propel-rich-green)] px-8 font-light"
                    : "text-white"}
                  ${!isSticky ? "rounded-t-2xls" : "rounded-4xls"}
                `}
              >
                {!isSticky && isActive && (
                  <>
                    {/* <span className="absolute -bottom-0 left-[-14px] w-4 h-4 bg-[var(--propel-clay-gray)]" />
                    <span className="absolute -bottom-0 left-[-16px] w-4 h-4 bg-[var(--propel-rich-green)] rounded-br-full" />
                    <span className="absolute -bottom-0 right-[-14px] w-4 h-4 bg-[var(--propel-clay-gray)]" />
                    <span className="absolute -bottom-0 right-[-16px] w-4 h-4 bg-[var(--propel-rich-green)] rounded-bl-full" /> */}
                  </>
                )}
                <Link to={link}>{title}</Link>
              </div>
            );
          })}

      {/* Aquí reincorporamos tu DropdownUserNav */}
      <div className="h-[80%] px-4 flex items-end justify-center relative">
        <DropdownUserNav navigate={navigate} handleLogout={handleLogout} />
      </div>
    </div>
  );
}
