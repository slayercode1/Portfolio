import { TypographyH1 } from "@/components/h1"
import { TypographyH3 } from "@/components/h3"
import { TypographyP } from "@/components/p"
import { CardProject } from "@/components/reusable/card_project"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import fuse from '../assets/img/Saly-43.png'


export const Home = () => {
  return (
    <div className="w-full pt-14 lg:pt-0">
      <div className="md:w-2/3 px-12 ">
        <TypographyH3 text="Bonjour, Je suis Yann Clain" />
        <div className="md:my-9">
          <TypographyH1 text="Développeur web & web mobile | Concepteur D'application" />
        </div>
        <TypographyP text="Passionné par la création et l'innovation, je mets mes compétences au service de vos projets. Actuellement à la recherche d'une entreprise pour une alternance en tant que Master CTO | Chef de Projet." />
        <div>

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
      </div>

      <img src={fuse} alt="logo fuse" width={150} className="absolute right-0 top-1/4" />

      <div className="px-12 mt-2">
        <h4 className="scroll-m-20 text-xl tracking-tight py-5 text-gray-500 uppercase">
          Projet récents
        </h4>
        <div className="flex gap-3 justify-center items-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="hidden lg:block"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/3 lg:basis-1/3">
                <a href="https://seigos.fr/" target="_blank">
                  <CardProject image='https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/27/10/42/271042e5-61b7-0534-c6c2-e9dc9e7c2326/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg' company="SEIGOS (Yukan Innovate)" technologie={['NestJs', 'Angular', 'MariaDB']} />
                </a>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <a href="https://step-post.fr/" target="_blank">
                  <CardProject company="StepPost" technologie={['Symfony', 'Mysql']} />
                </a>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <CardProject company="TaskFlow (Projet Personnel)" technologie={['React-Ts', 'AdonisJs', 'Mysql']} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="lg:hidden grid md:grid-cols-2 grid-cols-1 gap-4">
            <a href="https://seigos.fr/" target="_blank">
              <CardProject image='https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/27/10/42/271042e5-61b7-0534-c6c2-e9dc9e7c2326/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg' company="SEIGOS (Yukan Innovate)" technologie={['NestJs', 'Angular', 'MariaDB']} />
            </a>

            <a href="https://step-post.fr/" target="_blank">
              <CardProject company="StepPost" technologie={['Symfony', 'Mysql']} />
            </a>
            <CardProject company="TaskFlow (Projet Personnel)" technologie={['React-Ts', 'AdonisJs', 'Mysql']} />
          </div>
        </div>
      </div>

    </div>
  )
}