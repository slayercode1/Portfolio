import { ProjectData } from "./components/project-detail";
import noimage from './assets/img/no-image.png'

export const projectsData: ProjectData = {
  'SEIGOS (Yuakan Innovate)': {
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/27/10/42/271042e5-61b7-0534-c6c2-e9dc9e7c2326/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg',
    description: 'Seigos est une plateforme SaaS polyvalente qui optimise la gestion de votre entreprise. Elle offre des solutions en gestion de projet, gestion financière et commerce, conçues pour augmenter l’efficacité de vos équipes. Avec Seigos, vous pouvez réduire les dépenses, gagner du temps et simplifier vos processus d’affaires',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    websiteUrl: 'https://seigos.fr/'
  },
  'StepPost': {
    imageUrl: noimage,
    description: 'C\'est une platform de distribution de courir & colie',
    technologies: ['Symfony', 'Mysql',],
    websiteUrl: 'https://step-post.fr/'
  },
  'TaskFlow (Projet personel)': {
    imageUrl: noimage,
    description: 'Futur S.A.A.S destiné aux développeurs, pour la gestion de projets et autres, basé sur la méthode Agile.',
    technologies: ['React', 'AdonisJs', 'Mysql'],
    websiteUrl: ''
  }
};