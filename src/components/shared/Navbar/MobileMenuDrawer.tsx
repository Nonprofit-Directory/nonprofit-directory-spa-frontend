// src/components/shared/MobileMenuDrawer.tsx
import { Link, useLocation } from "react-router-dom";
import { IoClose, IoLogOut } from "react-icons/io5";
import { menuItems } from "./menuItems";

interface MobileMenuDrawerProps {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export function MobileMenuDrawer({
  open,
  onClose,
  onLogout,
}: MobileMenuDrawerProps) {
  const location = useLocation();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/50 z-50
          transition-opacity duration-400 ease-out
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full max-w-xs
          bg-[var(--propel-clay-gray)] z-50
          transform rounded-l-4xl
          transition-transform duration-400 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="
            self-end p-4 cursor-pointer
            transform transition duration-200 ease-in-out
            hover:scale-125
          "
        >
          <IoClose className="text-4xl text-[var(--propel-rich-green)]" />
        </button>

        {/* Nav items */}
        <nav className="flex-1 flex flex-col items-center gap-10 mt-6">
          {menuItems.map(({ title, link, Icon }, i) => {
            const isActive = location.pathname === link;
            return (
              <Link
                key={i}
                to={link}
                onClick={onClose}
                className={`
                  flex items-center gap-4
                  ${isActive
                    ? "text-[var(--propel-rich-green)]"
                    : "text-[var(--propel-rich-green)]/80"}
                  text-2xl sm:text-3xl font-semibold
                  transform transition duration-200 ease-in-out
                  hover:scale-110
                `}
              >
                <Icon size={28} />
                <span>{title}</span>
              </Link>
            );
          })}

          {/* Logout */}
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="
              flex items-center gap-3
              text-2xl sm:text-3xl font-semibold
              text-[var(--propel-rich-green)]/80
              transform transition duration-200 ease-in-out
              hover:scale-110 hover:text-[var(--propel-rich-green)]
            "
          >
            <IoLogOut size={28} />
            <span>Salir</span>
          </button>
        </nav>
      </div>
    </>
  );
}
