import { ChevronDownIcon, Cross2Icon } from '@radix-ui/react-icons'
import ts from '../assets/img/typescript-icon.svg'
import { CodeEditor } from '@/components/code-editor';
import gitBranch from '../assets/img/git-branch-outline.svg'
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from 'react';

export const AboutMe = () => {
  const [selectedTab, setSelectedTab] = useState<string>("personal");

  const tabItems = [
    "personal",
    "project",
  ];

  const code = `
const getInfoUser = (): UserInfo => {
  return {
    fullname: "Yann clain",
    certification: {
      "1": "Développeur web et mobile",
      "2": "Concepteur Développeur d'Applications"
    },
    description: "Créer des applications et des sites web.",
    formation: {
      post: "CTO | Chef de projet",
      school: "La fabrique numérique",
      city: "Pau",
      year: "2024-2026",
      status: "En cours"
    },
    // disponibilité: "fin Mars 2024",
    search: "Alternance"
  };
};

console.log(getInfoUser())
`;

  return (
    <Tabs.Root
      value={selectedTab}
      orientation="vertical"
      onValueChange={(val) => setSelectedTab(val)}
    >
      <div className='flex px-5 pt-16 md:pt-0 fade-out relative'>
        <div className="h-[calc(100vh-10.5rem)] md:h-auto  w-60 border hidden md:block rounded-l-lg bg-background">
          <div className='flex gap-1 items-center h-7 '>
            <ChevronDownIcon width={24} height={24} />
            <h1 className='font-bold'>ABOUT-ME</h1>
          </div>

          <Tabs.List
            className="flex-col items-start text-sm flex"
            aria-label="file typescript"
          >
            {tabItems.map((item, idx) => (
              <Tabs.Trigger
                key={idx}
                className=" w-full flex items-center gap-2 cursor-pointer  dark:data-[state=active]:text-black p-1 pl-7 data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700 data-[state=active]:shadow-sm duration-150 dark:text-white"
                value={item}
              >
                <img src={ts} alt="logo of typescript" width={16} height={16} />
                {item}.ts
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>

        {tabItems.map((item, idx) => (
          <Tabs.Content key={idx} className="w-full" value={item}>
            {
              item === 'personal' && (
                <div className='border w-full bg-gray-50 dark:bg-gray-600 h-[calc(100vh-10rem)] md:h-[calc(100vh-5rem)] lg:h-[calc(100vh-10.8rem)] md:rounded-r-lg rounded-lg md:rounded-none'>
                  <div className='border-b'>
                    <div className='w-28 flex items-center bg-gray-100 h-7 hover:bg-gray-200 dark:bg-gray-700 cursor-pointer group'>
                      <div className="flex items-center gap-2  p-1">
                        <img src={ts} alt="logo of typescript" width={16} height={16} />
                        <p className='text-sm'>personal.ts</p>
                      </div>
                      <Cross2Icon className='group-hover:block hidden' width={16} height={16} />
                    </div>
                  </div>
                  <div className='cursor-text'>
                    <CodeEditor code={code} />
                  </div>
                </div>
              )
            }
            {
              item === 'project' && (
                <div className='border w-full bg-gray-50 dark:bg-gray-600 h-[calc(100vh-10rem)] md:h-[calc(100vh-5rem)] lg:h-[calc(100vh-10.8rem)] md:rounded-r-lg rounded-lg md:rounded-none'>
                  <div className='border-b'>
                    <div className='w-28 flex items-center bg-gray-100 h-7 hover:bg-gray-200 dark:bg-gray-700 cursor-pointer group'>
                      <div className="flex items-center gap-2  p-1">
                        <img src={ts} alt="logo of typescript" width={16} height={16} />
                        <p className='text-sm'>project.ts</p>
                      </div>
                      <Cross2Icon className='group-hover:block hidden' width={16} height={16} />
                    </div>
                  </div>
                  <div className='cursor-text'>
                    <CodeEditor code={
                      `
const project_01 = "SEIGOS (Yuakan Innovate)"
const project_02 = "StepPost"
const project_03 = "TaskFlow (Projet personel)"
`
                    } hasProject={true} />
                  </div>
                </div>
              )
            }
          </Tabs.Content>
        ))}
        <div className='absolute bottom-1 left-5 right-5 flex'>
          <div className='border-t w-full h-6 flex items-center px-1 justify-between'>
            <div className='px-2 border-r flex'>
              <img src={gitBranch} alt="git-branch" width={16} height={16} />
              main
            </div>
            <div className='px-2'>
              typescript
            </div>
          </div>
        </div>
      </div>
    </Tabs.Root>

  )
}