import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import fuse from '../assets/img/Saly-43.png'
import { ScrollLogo } from "@/components/scroll-logo"
import { useNavigate } from "react-router-dom"
import {useTranslation} from "react-i18next";

export const Home = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className="w-full pt-14 md:pt-0 lg:pt-0 fade-out h-[calc(100vh-160px)] md:h-full">
      <div className="md:w-2/3 px-12 sm:h-[calc(100vh-17rem)] flex flex-col justify-center items-start">
        <h3 className=" scroll-m-20 text-2xl font-semibold tracking-tight py-5 dark:text-white" >{t('home.subTitle')}</h3>
        <div className="md:my-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-4  dark:text-white">{t('home.title')}</h1>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6  dark:text-white" >{t('home.pagraph')}</p>
        <div className="space-x-2 md:space-x-4">
          <a href="https://www.linkedin.com/in/yann-clain-185a91235/" target="_blank">
            <Button className="p-4 pl-0 mt-4" variant={"link"}>
              <LinkedInLogoIcon /> LinkedIn
            </Button>
          </a>
          <a href="https://github.com/slayercode1" target="_blank">
            <Button className="p-4" variant={"link"}>
              <GitHubLogoIcon /> GitHub
            </Button>
          </a>
          <a href="https://twitter.com/YannLeDev" target="_blank">
            <Button className="p-4" variant={"link"}>
              <TwitterLogoIcon /> X (Twitter)
            </Button>
          </a>
        </div>

        <div className="justify-end w-full hidden md:flex">
          <Button onClick={() => navigate("/about-me", {state: "tabs-project"})} className="mt-8">{t('home.button')}</Button>
        </div>
      </div>
      <img src={fuse} alt="logo fuse" width={250} className="absolute right-0 top-1/3 hidden md:block" />
      <div className="px-12 mt-2 ">
        <h4 className="scroll-m-20 text-xs tracking-tight py-5 text-gray-500 uppercase dark:text-white">
          ⚡ {t('home.tech')}
        </h4>
        <ScrollLogo />
      </div>
    </div>

  )
}