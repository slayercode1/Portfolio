import { ProjectData } from "./components/project-detail";
// import noimage from './assets/img/no-image.png'
import iot from './assets/img/home.png'
import taskflow from './assets/img/taskflow.png'
import mobile from './assets/img/mobile.png'
import steppost from './assets/img/steppost.png'

export const projectsData: ProjectData = {
  'SEIGOS (Yuakan Innovate)': {
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/27/10/42/271042e5-61b7-0534-c6c2-e9dc9e7c2326/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg',
    description: 'Seigos est une plateforme SaaS polyvalente qui optimise la gestion de votre entreprise. Elle offre des solutions en gestion de projet, gestion financière et commerce, conçues pour augmenter l’efficacité de vos équipes. Avec Seigos, vous pouvez réduire les dépenses, gagner du temps et simplifier vos processus d’affaires',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    websiteUrl: 'https://seigos.fr/'
  },
  'StepPost (Step)': {
    imageUrl: steppost,
    description: 'C\'est une platform de distribution de courir & colie',
    technologies: ['Symfony', 'Mysql',],
    websiteUrl: undefined
  },
  'TaskFlow (Projet personel)': {
    imageUrl: taskflow,
    description: 'Futur S.A.A.S destiné aux développeurs, pour la gestion de projets et autres, basé sur la méthode Agile.',
    technologies: ['React', 'AdonisJs', 'Mysql'],
    websiteUrl: undefined
  },
  'Projet IOT (Projet formation)': {
    imageUrl: iot,
    description: 'Ce projet a été réalisé dans le cadre d’une formation, avec pour objectif de développer une application de bureau capable de récupérer des données depuis un ESP82.',
    technologies: ['React', 'express', 'Mysql', 'typescript', 'arduino', 'esp82', 'electron'],
    websiteUrl: undefined
  },
  'Application mobile (Blog)': {
    imageUrl: mobile,
    description: 'L’objectif principal de ce projet est d’explorer en profondeur les technologies React Native et Expo. Ces outils, combinés à l’utilisation du langage de programmation JavaScript, nous permettront de concevoir et de construire une application mobile robuste, performante et multiplatform.',
    technologies: ['React native', 'typescript', 'expo', 'React navigation'],
    websiteUrl: undefined
  },
  // 'Learn graphql': {
  //   imageUrl: mobile,
  //   description: 'L’objectif principal de ce projet est d’explorer en profondeur les technologies React Native et Expo. Ces outils, combinés à l’utilisation du langage de programmation JavaScript, nous permettront de concevoir et de construire une application mobile robuste, performante et multiplatform.',
  //   technologies: ['Express', 'Apollo-server', 'typescript', 'typeORM', 'mysql', 'jwt', 'graphql'],
  //   websiteUrl: undefined
  // }
};