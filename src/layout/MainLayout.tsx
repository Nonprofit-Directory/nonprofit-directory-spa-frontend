import { Outlet } from "react-router-dom"
import Navbar from "@/components/shared/Navbar"
import HasRole from "@/pages/HasRole";
import { useAuthStore } from "@/lib/authStore";
import { Loader } from "lucide-react";

const MainLayout = () => {
  const role = useAuthStore(s => s.user?.['custom:role']);
  const loadingUser = useAuthStore(s => s.loading);
  const user = useAuthStore(s => s.user);

  if(!loadingUser){
    <div className="flex flex-col items-center justify-center h-full w-full space-y-4">
      {/* Icono girando */}
      <Loader className="w-12 h-12 text-[var(--propel-rich-green)] animate-spin" />

      {/* Texto o burbuja que rebota */}
      <div className="flex space-x-2">
        <span className="inline-block w-3 h-3 bg-[var(--propel-ignite-orange)] rounded-full animate-bounce" />
        <span className="inline-block w-3 h-3 bg-[var(--propel-ignite-orange)] rounded-full animate-bounce animation-delay-200" />
        <span className="inline-block w-3 h-3 bg-[var(--propel-ignite-orange)] rounded-full animate-bounce animation-delay-400" />
      </div>
    </div>
  }

  // si no tiene rol, mostramos el selector antes que el layout normal
  if (user && !role) {
    return <HasRole />;
  }

  return (
    <div className="flex flex-col h-svh w-svw">
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