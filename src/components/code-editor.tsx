import { useState } from 'react';
import '../assets/style/codeEditor.css';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ProjectDetails } from './project-detail';
import { projectsData } from '@/data-project';
import { Cross2Icon } from '@radix-ui/react-icons';
import { AlertDialogCancel } from '@radix-ui/react-alert-dialog';
import { Button } from './ui/button';


interface CodeEditorProps {
  code: string
  hasProject?: boolean; // Ajouter une prop pour indiquer si un projet est présent
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code, hasProject = false }) => {
  const [selectedProject, setSelectedProject] = useState<string>(''); // Variable d'état pour stocker le projet sélectionné


  const handleLineClick = (projectName: string) => {
    setSelectedProject(projectName);
  };
  // Fonction pour formater le code avec la coloration syntaxique
  const formatCode = (code: string) => {
    // Définir les mots-clés
    const keywords = [
      'interface', 'const', 'let', 'var', 'import', 'export', 'return', 'from', 'default'
    ];

    // Ajouter des styles aux mots-clés
    keywords.forEach(keyword => {
      code = code.replace(new RegExp(`\\b${keyword}\\b`, 'g'), `<span class="keyword">${keyword}</span>`);
    });

    // Ajouter des styles aux commentaires
    code = code.replace(/\/\/(.*)/g, '<span class="comment">//$1</span>');


    // Ajouter des styles aux crochets
    code = code.replace(/(\{|\})/g, '<span class="bracket">$1</span>');

    // Ajouter des styles aux clés
    code = code.replace(/(\b\w+\b)(?=\s*?:)/g, '<span class="key">$1</span>');
    return code;
  };

  // Split the code into lines and remove empty lines
  const lines = code.split('\n').filter(line => line.trim() !== '');

  return (
    <AlertDialog>
      <div className="code-content text-xs md:text-sm">
        {lines.map((line, index) => (
          <AlertDialogTrigger key={index} className={`code-line ${hasProject ? 'cursor-pointer' : 'cursor-text'}`}
            onClick={() => hasProject && handleLineClick(line.match(/"([^"]+)"/)?.[1] || '')}>
            <div className="line-numbers">
              <div className="line-number text-gray-300">{index + 1}</div>
            </div>
            <div className="line-content" dangerouslySetInnerHTML={{ __html: formatCode(line) }} />
          </AlertDialogTrigger>
        ))}
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className='flex justify-between items-center w-full'>
              {selectedProject}
              <AlertDialogCancel>
                <Button variant="outline" size="icon">
                  <Cross2Icon className="h-4 w-4" />
                </Button>
              </AlertDialogCancel>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <ProjectDetails selectedProject={selectedProject} />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {
              projectsData[selectedProject]?.websiteUrl !== undefined && <a href={projectsData[selectedProject]?.websiteUrl} target='_blank'>
                <AlertDialogAction>Visit website</AlertDialogAction>
              </a>
            }
          </AlertDialogFooter>
        </AlertDialogContent>
      </div>
    </AlertDialog>

  );
};





