import  './header.css';
import  EN  from '../../../../public/assets/icons/en.svg';
import  ES  from '../../../../public/assets/icons/es.svg';
import  PT  from '../../../../public/assets/icons/pt.svg';
import { DarkMode } from './darkmode/DarkMode';
import { ColorsBar } from './colorsbar/ColorsBar';
import { useTranslation } from 'react-i18next';


export const Header = () => {
    const [ t, i18n ] = useTranslation("global");

    const handleChangeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      
      localStorage.setItem('lng', lng);
  }

  return (
    <>
      <header>

      <DarkMode/>

        <div id="flags" className="flags">
          <div className="flags__item--en">
            <img onClick={() => handleChangeLanguage('en')} 
                className="flags__img" src={ EN } alt="English" 
            />
          </div>   
          <div className="flags__item--es">
            <img onClick={() => handleChangeLanguage('es')} 
                className="flags__img" src={ ES } alt="Spanish" 
            />
          </div>       
          <div className="flags__item--pt">
            <img onClick={() => handleChangeLanguage('pt')} 
                className="flags__img" src={ PT } alt="Portuguese" 
            />
          </div>          
        </div>
        
        <ColorsBar/>

      </header>
    </>
  );
};
