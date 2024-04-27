
import { projectsData } from '@/data-project';
import React from 'react';
import { Badge } from './ui/badge';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogCancel } from './ui/alert-dialog';
import { Button } from './ui/button';

export interface ProjectData {
  [key: string]: {
    imageUrl: string;
    description: string;
    technologies: string[];
    websiteUrl: string | undefined;
  };
}

interface ProjectDetailsProps {
  selectedProject: string;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ selectedProject }) => {
  // Vérifier si le projet sélectionné existe dans les données
  if (!projectsData[selectedProject]) {
    return <div>Projet non trouvé</div>;
  }

  const { imageUrl, description, technologies } = projectsData[selectedProject];



  return (
    <AlertDialog>
      <AlertDialogTrigger className='flex items-center justify-center cursor-pointer w-full'>
        <img className=" h-60 w-auto rounded-md object-cover" src={imageUrl} alt={selectedProject} />

      </AlertDialogTrigger>
      <p className="scroll-m-20 text-xs tracking-tight py-2 text-gray-500 uppercase dark:text-white">About</p>
      <p className='mb-4'>{description}</p>

      <h4 className="scroll-m-20 text-xs tracking-tight py-2 text-gray-500 uppercase dark:text-white">
        ⚡ Technologies
      </h4>
      <div>
        {
          technologies.map((techno, idx) => (
            <Badge className='mr-3 mb-2' key={idx}>
              {/* <img src={logo[idx]} alt="logo of technologie" width={16} height={16} className="mr-2 " /> */}
              {techno}
            </Badge>
          ))
        }
      </div>

      <AlertDialogContent className='bg-transparent border-none absolute shadow-none'>
        <AlertDialogCancel className='z-50 -right-[98%] -top-[75%] absolute bg-transparent border-none hover:bg-transparent'>
          <Button variant={'outline'} >x</Button>
        </AlertDialogCancel>
        <div className='flex justify-center items-center ' >
          <img
            src={imageUrl}
            alt={selectedProject}
            className='h-60'
            style={{ transform: `scale(3)` }}
          />
        </div>
      </AlertDialogContent>



    </AlertDialog>
  );
};


