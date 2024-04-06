import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./partials/layout"
import { Home } from "./home"
import { Contact } from "./contact"
import { Error404 } from "./error/404Error"
import { ThemeProvider } from "@/hooks/themeProvider"
import { useEffect, useState } from "react"
import { Preloader } from "./preloader"


const RootApp = () => {
  const [preloader, setPreloader] = useState<boolean>(true)
  useEffect(() => {

    const timer = setTimeout(() => {
      setPreloader(false)
    }, 3000);
    return () => clearTimeout(timer)
  }, [])
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error404 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ]
    },
  ])
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {
        preloader ? <Preloader /> : <RouterProvider router={router} />
      }
    </ThemeProvider>
  )
}

export default RootApp
