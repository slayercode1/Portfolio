import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import logo from '../assets/img/logo.png'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export const NavigationBar = () => {
  const navigate = useNavigate()
  const pathname = window.location.pathname

  const navigation = [
    { title: "Accueil", path: "/" },
    { title: "Contact", path: "/contact" },
  ]

  return (
    <nav className="border-b w-full md:static md:text-sm md:border-none py-2 fixed backdrop-blur-sm bg-white/30 lg:backdrop-blur-none lg:bg-transparent z-10">
      <div className="items-center px-4 mx-auto md:flex">
        <div className="flex items-center justify-between py-1 md:block">
          <img
            src={logo}
            width={120}
            height={50}
            alt="Title logo"
          />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </SheetTrigger>
              <SheetContent side={"left"} className="w-[400px]">
                <div className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 block`}>
                  <ul  className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                    {
                      navigation.map((item, idx) => {
                        return (
                          <SheetClose asChild key={idx} >
                            <li className="text-gray-700 hover:text-indigo-600 flex items-center">
                              {
                                pathname === item.path && <ArrowRightIcon className="text-primary h-8" />
                              }
                              <Button variant={"link"} onClick={() => { navigate(item.path) }} className={pathname == item.path ? "active" : "p-0"}>
                                {item.title}
                              </Button>
                            </li>
                          </SheetClose>
                        )
                      })
                    }
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
        </div>
        <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}>
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {
              navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-700 hover:text-indigo-600">
                    <Button variant={"link"} onClick={() => {navigate(item.path)}} className={pathname == item.path ? "p-0 active": "p-0"}>
                      {item.title}
                    </Button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}