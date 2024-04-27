import { Footer } from "@/components/footer"
import { NavigationBar } from "@/components/nav"
import { Outlet, useLocation } from "react-router-dom"

export const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg ">
      <NavigationBar />
      <Outlet />
      {pathname !== "/contact" && <Footer />}
    </div>
  )
}