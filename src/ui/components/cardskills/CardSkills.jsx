import './cardskill.css'
import { CardProjects } from '../cardprojects/CardProjects';
import { useTranslation } from 'react-i18next';


export const CardSkills = () => {
  const [ t, i18n ] = useTranslation("global");

  return (
    <>
    <section className="column column--right">
       {/* Card 1  */}
      <article className="card-skill">
        <h2 className="card__title-skill">FrontEnd</h2>
        <small>{t("skills.card__title-skill-small")}</small>
        <div className="skills">
          <div className="skills__header">
            <span className="skills__start-level">0</span>
            <span className="skills__start-level">2</span>
          </div>
          <div className="skills__item">
            <p className="skills__tech">HTML</p>
            <div className="skills__bar skills__bar--90"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">CSS</p>
            <div className="skills__bar skills__bar--80"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">SASS</p>
            <div className="skills__bar skills__bar--70"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Material UI</p>
            <div className="skills__bar skills__bar--30"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Bootstrap</p>
            <div className="skills__bar skills__bar--50"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">JavaScript</p>
            <div className="skills__bar skills__bar--90"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">TypeScript</p>
            <div className="skills__bar skills__bar--40"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">React</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Redux</p>
            <div className="skills__bar skills__bar--50"></div>
          </div>
        </div>
      </article>

       {/* Card 2  */}
      <article className="card-skill">
        <h2 className="card__title-skill">Backend</h2>
        <small>{t("skills.card__title-skill-small")}</small>
        <div className="skills">
          <div className="skills__header">
            <span className="skills__start-level">0</span>
            <span className="skills__start-level">2</span>
          </div>
          <div className="skills__item">
            <p className="skills__tech">PHP</p>
            <div className="skills__bar skills__bar--50"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">MySQL</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">MongoDB</p>
            <div className="skills__bar skills__bar--30"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Firebase</p>
            <div className="skills__bar skills__bar--30"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Node.js</p>
            <div className="skills__bar skills__bar--10"></div>
          </div>
        </div>
      </article>

       {/* Card 3  */}
      <article className="card-skill">
        <h2 className="card__title-skill">{t("skills.card__title-skill-3")}</h2>
        <small>{t("skills.card__title-skill-small")}</small>
        <div className="skills">
          <div className="skills__header">
            <span className="skills__start-level">0</span>
            <span className="skills__start-level">2</span>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Git</p>
            <div className="skills__bar skills__bar--80"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">GitHub</p>
            <div className="skills__bar skills__bar--80"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">NPM</p>
            <div className="skills__bar skills__bar--80"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Yarn</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Webpack</p>
            <div className="skills__bar skills__bar--70"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Vite</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Composer</p>
            <div className="skills__bar skills__bar--40"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Gulp</p>
            <div className="skills__bar skills__bar--40"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Jest</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Cypress</p>
            <div className="skills__bar skills__bar--50"></div>
          </div>
        </div>
      </article>

       {/* Card 4  */}
      <article className="card-skill">
        <h2 className="card__title-skill">{t("skills.card__title-skill-4")}</h2>
        <small>{t("skills.card__title-skill-small")}</small>
        <div className="skills">
          <div className="skills__header">
            <span className="skills__start-level">0</span>
            <span className="skills__start-level">2</span>
          </div>
          <div className="skills__item">
            <p className="skills__tech">{t("skills.card-4-skills__tech-1")}</p>
            <div className="skills__bar skills__bar--70"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">{t("skills.card-4-skills__tech-2")}</p>
            <div className="skills__bar skills__bar--80"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">{t("skills.card-4-skills__tech-3")}</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">{t("skills.card-4-skills__tech-4")}</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">{t("skills.card-4-skills__tech-5")}</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">{t("skills.card-4-skills__tech-6")}</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">{t("skills.card-4-skills__tech-7")}</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">{t("skills.card-4-skills__tech-8")}</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
        </div>
      </article>   

        <CardProjects/>
       {/* END column column--right */}
      </section>
    </>
  );
};
