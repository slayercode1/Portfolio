import { TypographyP } from './p';
import {useTranslation} from "react-i18next";
export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between ">
          <TypographyP text={`${t('footer.credit')} ❤️`} />
          <TypographyP text={`Copyright © ${new Date().getFullYear()}.`} />
        </div>
      </div>
    </footer>
  )
}