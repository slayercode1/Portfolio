import { TypographyH3 } from "@/components/h3"
import { CardProject } from "@/components/reusable/card_project"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import iot from '../assets/img/home.png'
import mobile from '../assets/img/mobile.png'
import steppost from '../assets/img/steppost.png'
import taskflow from '../assets/img/taskflow.png'

export const Project = () => {


  const navigate = useNavigate();

  useEffect(() => {
    const isDesktop = () => {
      return window.matchMedia("(min-width: 768px)").matches;
    };

    const redirectIfDesktop = () => {
      if (isDesktop() && window.location.pathname === '/project') {
        navigate('/about-me');
      }
    };

    redirectIfDesktop();

    window.addEventListener('resize', redirectIfDesktop);

    return () => {
      window.removeEventListener('resize', redirectIfDesktop);
    };
  }, [navigate]);

  return (
    <div className="pt-16 fade-out">
      <div className="text-gray-600 ">
        <div className="max-w-lg  px-4 sm:mx-auto sm:text-center sm:px-0">
          <TypographyH3 text='🗂️ Mes Projets' />
        </div>
      </div>
      <div className="flex items-center gap-3 flex-col px-4">
        <CardProject
          image={mobile}
          company="Application mobile (Blog)"
          technologie={['React native', 'typescript', 'expo', 'React navigation']}
          description='L’objectif principal de ce projet est d’explorer en profondeur les technologies React Native et Expo. Ces outils, combinés à l’utilisation du langage de programmation JavaScript, nous permettront de concevoir et de construire une application mobile robuste, performante et multiplatform.'
        />
        <CardProject
          image={taskflow}
          company="TaskFlow (Projet personel)"
          technologie={['React', 'AdonisJs', 'Mysql']}
          description="Futur S.A.A.S destiné aux développeurs, pour la gestion de projets et autres, basé sur la méthode Agile."
        />
        <CardProject
          image={iot}
          company="Projet IOT (Projet formation)"
          technologie={['React', 'express', 'Mysql', 'typescript', 'arduino', 'esp82', 'electron']}
          description=""
        />
        <CardProject
          image="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/27/10/42/271042e5-61b7-0534-c6c2-e9dc9e7c2326/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg"
          company="SEIGOS (Yuakan Innovate)"
          technologie={['NestJs', 'Angular 13', 'Mysql/MariaDb']}
          description="Seigos est une plateforme SaaS polyvalente qui optimise la gestion de votre entreprise. Elle offre des solutions en gestion de projet, gestion financière et commerce, conçues pour augmenter l’efficacité de vos équipes. Avec Seigos, vous pouvez réduire les dépenses, gagner du temps et simplifier vos processus d’affaires"
        />
        <CardProject
          image={steppost}
          company="StepPost (Step)"
          technologie={['Symfony', 'Mysql',]}
          description="C\'est une platform de distribution de courir & colie"
        />
      </div>

    </div>
  )
}