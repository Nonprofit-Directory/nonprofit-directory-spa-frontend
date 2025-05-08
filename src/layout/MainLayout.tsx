import { Outlet } from "react-router-dom"
import Navbar from "@/components/shared/Navbar"
import HasRole from "@/pages/HasRole";
import { useAuthStore } from "@/lib/authStore";

const MainLayout = () => {
  const role = useAuthStore(s => s.user?.['custom:role']);

  // si no tiene rol, mostramos el selector antes que el layout normal
  if (!role) {
    return <HasRole />;
  }

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main 
       id="scroll-container"
       className="flex-1 overflow-y-auto bg-[var(--propel-clay-gray)] sm:p-6"
       >
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout