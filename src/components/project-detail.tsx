
import { projectsData } from '@/data-project';
import React from 'react';
import { Badge } from './ui/badge';

export interface ProjectData {
  [key: string]: {
    imageUrl: string;
    description: string;
    technologies: string[];
    websiteUrl: string;
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
    <div>
      <div className='flex items-center justify-center'>
        <img className=" h-60 w-60 rounded-md object-cover" src={imageUrl} alt={selectedProject} />

      </div>
      <p className="scroll-m-20 text-xs tracking-tight py-2 text-gray-500 uppercase dark:text-white">About</p>
      <p className='mb-4'>{description}</p>

      <h4 className="scroll-m-20 text-xs tracking-tight py-2 text-gray-500 uppercase dark:text-white">
        ⚡ Technologies
      </h4>
      <div>
        {
          technologies.map((techno, idx) => (
            <Badge className='mr-3' key={idx}>
              {/* <img src={logo[idx]} alt="logo of technologie" width={16} height={16} className="mr-2 " /> */}
              {techno}
            </Badge>
          ))
        }
      </div>
    </div>
  );
};


