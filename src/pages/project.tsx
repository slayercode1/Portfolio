import { TypographyH3 } from "@/components/h3"
import { CardProject } from "@/components/reusable/card_project"
import nestjs from '../assets/img/nestjs.svg'
import angular from '../assets/img/angular-icon.svg'
import mariadb from '../assets/img/mariadb-icon.svg'
import mysql from '../assets/img/mysql-icon.svg'
import symfony from '../assets/img/symfony.svg'
import adonis from '../assets/img/adonisjs-icon.svg'
import react from '../assets/img/react.svg'
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

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
      <div className="flex items-center gap-3 flex-col">
        <a href="https://seigos.fr/" target="_blank" className="w-[90%]">
          <CardProject
            image='https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/27/10/42/271042e5-61b7-0534-c6c2-e9dc9e7c2326/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg'
            company="SEIGOS (Yukan Innovate)"
            technologie={['NestJs', 'Angular', 'MariaDB']}
            logo={[nestjs, angular, mariadb]}
          />
        </a>

        <a href="https://step-post.fr/" target="_blank" className="w-[90%]">
          <CardProject
            company="StepPost"
            technologie={['Symfony', 'Mysql',]}
            logo={[symfony, mysql]}
          />
        </a>

        <div className="w-[90%]">
          <CardProject
            company="TaskFlow (Projet Personnel)"
            technologie={['React', 'AdonisJs', 'Mysql']}
            logo={[react, adonis, mysql]}
          />
        </div>
      </div>

    </div>
  )
}