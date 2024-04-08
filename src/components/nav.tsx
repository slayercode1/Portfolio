import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import logo from '../assets/img/logo.png'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet"
import { ArrowRightIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "@/hooks/themeProvider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


export const NavigationBar = () => {
  const navigate = useNavigate()
  const { theme, setTheme } = useTheme()
  const pathname = window.location.pathname

  const navigation = [
    { title: "_Accueil", path: "/" },
    { title: "_Projet", path: "/project" },
    { title: "_About-me", path: "/about-me" },
    { title: "_Contact", path: "/contact" },
  ]

  return (
    <nav className="border-b w-full md:static md:text-sm md:border-none py-2 fixed backdrop-blur-sm bg-white/30 dark:bg-black/30 lg:dark:bg-transparent lg:backdrop-blur-none lg:bg-transparent z-10">
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
                    <Select onValueChange={(value ) => setTheme(value as never)} defaultValue={theme}>
                      <SelectTrigger className="w-full]">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>

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
                  <li key={idx} className={`text-gray-700 hover:text-indigo-600 ${item.path === '/project' ? 'hidden': 'block'}`}>
                    <Button variant={"link"} onClick={() => {navigate(item.path)}} className={pathname == item.path ? "p-0 active": "p-0"}>
                      {item.title}
                    </Button>
                  </li>
                )
              })
            }
            <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent  align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>

          
        </div>
      </div>
    </nav>
  )
}