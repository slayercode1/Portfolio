import { TypographyP } from './p';
export const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <TypographyP text='Créer par Yann avec ❤️' />
          <TypographyP text={`Copyright © ${new Date().getFullYear()}.`} />
        </div>
      </div>
    </footer>
  )
}