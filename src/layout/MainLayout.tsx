import { Outlet } from "react-router-dom"
import Navbar from "@/components/shared/Navbar"

const MainLayout = () => {
  return (
    <div className="w-screen h-screen bg-[var(--propel-clay-gray)] overflow-y-scroll relative">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout