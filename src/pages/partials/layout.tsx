import { Footer } from "@/components/footer"
import { NavigationBar } from "@/components/nav"
import { Outlet } from "react-router-dom"

export const Layout = () => {
  return (
    <div className="bg ">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  )
}