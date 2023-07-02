import './cardprofile.css';
import Profile from '../../../../public/assets/images/developer.jpg';
import { Experience } from '../experience/Experience';
import  Hobbies  from '../hobbies/Hobbies';
import { CardSkills } from '../cardskills/CardSkills';
import { MdOutlineMail } from 'react-icons/md';
import { BsTelegram } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { GeneratorQR } from './GeneratorQR';


export const CardProfile = () => {
  const [ t, i18n ] = useTranslation("global");  

  return (
    <>
      <main className="main" id='start'>
        <section className="colum colum--left">
          <article className="card card--profile">
            <div className="card__image--container">
              <img src={Profile} alt="Profile picture" />
            </div>
            <div className="card__header">
              <h2 className="card__title-profile">Leandro Alexis Piazza</h2>
              <p className="card__subtitle" >{t("profile.card__subtitle")}</p>
            </div>
            <div className="car__body">
              <div className="card__link">
                <i className="fas fa-envelope icon"></i>
                <a
                  href="mailto:lean.piazza988@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdOutlineMail /> lean.piazza988@gmail.com
                </a>
              </div>
              <div className="card__link">
                <i className="fas  fa-phone-alt icon"></i>
                <a href="https://t.me/Leeo23" target="_blank" rel="noreferrer">
                  <BsTelegram /> Telegram
                </a>
              </div>
              <p className="card__text">{t("profile.card__text")}</p>
            </div>

            <GeneratorQR/>
            
          </article>
          <Experience />
          <Hobbies />
        </section>

        <CardSkills />
      </main>
    </>
  );
};
