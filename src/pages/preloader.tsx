import {useEffect} from "react";
import {useTranslation} from "react-i18next";

export const Preloader = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);
  return (
    <div className="h-screen  bg grid place-items-center">
      <span className="loader"></span>
    </div>
  )
}