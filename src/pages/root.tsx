import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./partials/layout"
import { Home } from "./home"
import { Contact } from "./contact"
import { Error404 } from "./error/404Error"
import { ThemeProvider } from "@/hooks/themeProvider"


const RootApp = () => {
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
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default RootApp
