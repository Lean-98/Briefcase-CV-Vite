import './experience.css';
import  Logo  from '../../../../public/assets/images/logo.png';
import { useTranslation } from 'react-i18next';


export const Experience = () => {
  const [ t, i18n ] = useTranslation("global");  

  return (
    <article className="card card--experience">
      <h2 className="card__title-experience">{t("experience.card__title-experience")}</h2>
      {/* Experiencie 01 */}
      <div className="experience">
        <img src={ Logo } alt="logo" className="experience__image"/>
        <div className="experience__info">
          <p className="experience__time">{t("experience.experience__time")}</p>
          <h3 className="experience__job">{t("experience.experience__job")}</h3>
          <p className="experience__description">{t("experience.experience__description")}</p>
        </div>
      </div>

      {/* Experiencie 02 */}
      <div className="experience">
        <img src={ Logo } alt="logo" className="experience__image"/>
        <div className="experience__info">
          <p className="experience__time">{t("experience.experience__time-2")}</p>
          <h3 className="experience__job">{t("experience.experience__job-2")}</h3>
          <p className="experience__description">{t("experience.experience__description-2")}</p>
        </div>
      </div>
    </article>
  )
}
