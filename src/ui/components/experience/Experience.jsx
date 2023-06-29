import './experience.css';
import  Logo  from '../../../../public/assets/images/logo.png';

export const Experience = () => {
  return (
    <article className="card card--experience">
      <h2 className="card__title-experience">Experiences</h2>
      {/* Experiencie 01 */}
      <div className="experience">
        <img src={ Logo } alt="logo" className="experience__image"/>
        <div className="experience__info">
          <p className="experience__time" data-section="experience" data-value="first-job-dates">
            Marzo 2022 - Current
          </p>
          <h3 className="experience__job" data-section="experience" data-value="first-job-title">Freelancer FullStack Developer</h3>
          <p className="experience__description" data-section="experience" data-value="first-job-description">Desarrollo Web Completo con HTML5, CSS3 Sass Gulp, JS, POO con PHP usando estructura MVC y base de datos relacionales - MySQL(crud, normalización, cardinalidad,relación de tablas,joins,etc).</p>
        </div>
      </div>

      {/* Experiencie 02 */}
      <div className="experience">
        <img src={ Logo } alt="logo" className="experience__image"/>
        <div className="experience__info">
          <p className="experience__time" data-section="experience" data-value="second-job-dates">
            November 2022 - Current
          </p>
          <h3 className="experience__job" data-section="experience" data-value="second-job-title">Front-End Developer</h3>
          <p className="experience__description" data-section="experience" data-value="second-job-description">Aprendiendo el framework React.js</p>
        </div>
      </div>
    </article>
  )
}
