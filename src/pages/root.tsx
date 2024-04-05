import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./partials/layout"
import { Home } from "./home"
import { Contact } from "./contact"
import { Error404 } from "./error/404Error"


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
  return <RouterProvider router={router} />
}

export default RootApp
