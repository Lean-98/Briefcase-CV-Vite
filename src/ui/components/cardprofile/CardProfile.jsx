import './cardprofile.css';

import Profile from '../../../../public/assets/images/profile-me.jpg';
import { MdOutlineMail } from 'react-icons/md';
import { BsTelegram } from 'react-icons/bs';
import { Experience } from '../experience/Experience';
import Hobbies from '../hobbies/Hobbies';
import { CardSkills } from '../cardskills/CardSkills';

export const CardProfile = () => {
  return (
    <>
      <main className="main">
        <section className="colum colum--left">
          <article className="card card--profile">
            <div className="card__image--container">
              <img src={Profile} alt="Profile picture" />
            </div>
            <div className="card__header">
              <h2 className="card__title-profile">Leandro Alexis Piazza</h2>
              <p
                className="card__subtitle"
                data-section="profile"
                data-value="rol"
              >
                Front End Developer
              </p>
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
              <p
                className="card__text"
                data-section="profile"
                data-value="description"
              >
                Busco desarrollar mi experiencia, a la vez que desarrollo mi
                carrera profesional, para crecer en el ámbito
                tecnológico,buscando nuevos retos y técnicas.
                <br /> Amante del conocimiento,siempre buscando ser mejor en lo
                que hago.
              </p>
            </div>

            {/* <div className="contenedor__qr">
                    <div id="contenedorQR" className="contenedorQR" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                    </div>
                </div> */}
          </article>
          <Experience />
          <Hobbies />
        </section>

        <CardSkills />
      </main>
    </>
  );
};
