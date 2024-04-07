import { ChevronDownIcon, Cross2Icon } from '@radix-ui/react-icons'
import ts from '../assets/img/typescript-icon.svg'
import { CodeEditor } from '@/components/code-editor';

export const AboutMe = () => {
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
    <div className='flex px-5 pt-16 md:pt-0 fade-out'>
      <div className=" h-[calc(100vh-10.5rem)] w-60 border hidden md:block rounded-l-lg bg-background">
        <div className='flex gap-1 items-center h-7 '>
          <ChevronDownIcon width={24} height={24} />
          <h1 className='font-bold'>ABOUT-ME</h1>
        </div>
        <div className="flex items-center gap-2 cursor-pointer bg-gray-100 dark:text-black p-1 pl-7">
          <img src={ts} alt="logo of typescript" width={16} height={16} />
          <p className='text-sm'>personal.ts</p>
        </div>
      </div>
      <div className='border w-full bg-gray-50 dark:bg-gray-600 h-[calc(100vh-14rem)] md:h-auto md:rounded-r-lg rounded-lg md:rounded-none'>
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
    </div>
  )
}