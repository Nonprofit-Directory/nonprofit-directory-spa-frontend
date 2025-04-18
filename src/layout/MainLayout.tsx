import { Outlet } from "react-router-dom"
import Navbar from "@/components/shared/Navbar"

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main 
       id="scroll-container"
       className="flex-1 overflow-y-auto bg-[var(--propel-clay-gray)] p-6"
       >
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout