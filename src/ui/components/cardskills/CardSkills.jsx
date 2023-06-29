import { CardProjects } from '../cardprojects/CardProjects';
import './cardskill.css'

export const CardSkills = () => {
  return (
    <>
    <section className="column column--right">
       {/* Card 1  */}
      <article className="card-skill">
        <h2 className="card__title-skill">Front End</h2>
        <small>Años de Experiencia</small>
        <div className="skills">
          <div className="skills__header">
            <span className="skills__start-level">0</span>
            <span className="skills__start-level">1</span>
          </div>
          <div className="skills__item">
            <p className="skills__tech">HTML</p>
            <div className="skills__bar skills__bar--70"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">CSS</p>
            <div className="skills__bar skills__bar--50"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">JavaScript</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">React.js</p>
            <div className="skills__bar skills__bar--10"></div>
          </div>
        </div>
      </article>

       {/* Card 2  */}
      <article className="card-skill">
        <h2 className="card__title-skill">Backend</h2>
        <small>Años de Experiencia</small>
        <div className="skills">
          <div className="skills__header">
            <span className="skills__start-level">0</span>
            <span className="skills__start-level">1</span>
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
        </div>
      </article>

       {/* Card 3  */}
      <article className="card-skill">
        <h2 className="card__title-skill">Dev Tools</h2>
        <small>Años de Experiencia</small>
        <div className="skills">
          <div className="skills__header">
            <span className="skills__start-level">0</span>
            <span className="skills__start-level">1</span>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Github</p>
            <div className="skills__bar skills__bar--50"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Visual Studio</p>
            <div className="skills__bar skills__bar--70"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Sass</p>
            <div className="skills__bar skills__bar--60"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Gulp</p>
            <div className="skills__bar skills__bar--40"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">NPM</p>
            <div className="skills__bar skills__bar--40"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Webpack</p>
            <div className="skills__bar skills__bar--40"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Cypress</p>
            <div className="skills__bar skills__bar--50"></div>
          </div>
        </div>
      </article>

       {/* Card 4  */}
      <article className="card-skill">
        <h2 className="card__title-skill">Skills</h2>
        <small>Años de Experiencia</small>
        <div className="skills">
          <div className="skills__header">
            <span className="skills__start-level">0</span>
            <span className="skills__start-level">1</span>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Responsabilidad</p>
            <div className="skills__bar skills__bar--70"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Creatividad</p>
            <div className="skills__bar skills__bar--70"></div>
          </div>
          <div className="skills__item">
            <p className="skills__tech">Multitarea</p>
            <div className="skills__bar skills__bar--50"></div>
          </div>
        </div>
      </article>   

        <CardProjects/>
       {/* END column column--right */}
      </section>
    </>
  );
};
