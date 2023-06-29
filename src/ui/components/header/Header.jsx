import  './header.css';
import  Moon  from '../../../../public/assets/icons/moon.svg';
import  ES  from '../../../../public/assets/icons/es.svg';
import  EN  from '../../../../public/assets/icons/en.svg';

export const Header = () => {
  return (
    <>
      <header>
        <div className="switches">
          <div id="toggle-theme" className="toggle-theme">
            <img
              id="toggle-icon"
              src={ Moon }
              alt="icon theme"
              className="toggle-theme__icon"
            />
            <p id="toggle-text" className="toggle-theme__text">
              {/* Dark Mode */}
            </p>
          </div>
        </div>
        
        <div id="flags" className="flags">
          <div className="flags__item--es" data-language="es">
            <img className="flags__img" src={ ES } alt="Spanish" />
          </div>
          <div className="flags__item--en" data-language="en">
            <img className="flags__img" src={ EN } alt="English" />
          </div>          
        </div>
        
        <div id="toggle-colors" className="colors">
          <div
            data-color="hsl(214, 84%, 56%)"
            className="colors__item colors__item--blue"
          ></div>
          <div
            data-color="hsl(150, 84%, 56%)"
            className="colors__item colors__item--green"
          ></div>
          <div
            data-color="hsl(276, 84%, 56%)"
            className="colors__item colors__item--purple"
          ></div>
          <div
            data-color="hsl(46, 84%, 56%)"
            className="colors__item colors__item--orange"
          ></div>
          <div
            data-color="hsl(5, 84%, 56%)"
            className="colors__item colors__item--red"
          ></div>
        </div>
      </header>
    </>
  );
};
