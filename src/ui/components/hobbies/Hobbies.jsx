import './hobbies.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack  } from '@splidejs/react-splide';
import { useTranslation } from 'react-i18next';
import {
    Bike01, 
    Bike02,  
    Swimming, 
    Gym,   
} from './index';



export default function Hobbies() {
  const [ t, i18n ] = useTranslation("global"); 

  const options = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    interval: '4000',
    pauseOnHover : false,
    resetProgress: false,
  };

  return (
    <article className="card card--hobbies">
      <h2 className="card__title-hobbies">{t("hobbies.card__title-hobbies")}</h2>
      <div className="card__image--hobbieSplide" data-aos="zoom-in-up">
      <Splide
          options={ options }
          aria-labelledby="hobbies__autoplayimages"
          hasTrack={ false } >
          <div style={ { position: 'relative' } }>
              <SplideTrack>
              <SplideSlide>
                      <img src={ Bike01 } alt='Cycling' />
                  </SplideSlide>
              <SplideSlide>
                      <img src={ Bike02 } alt='Cycling' />
                  </SplideSlide>
              <SplideSlide>
                      <img src={ Swimming } alt='Swimming' />
                  </SplideSlide>
              <SplideSlide>
                      <img src={ Gym } alt='Gym' />
                  </SplideSlide>
              </SplideTrack>
          </div>
      </Splide>
      </div>
      <h3 className="hobbie__title">{t("hobbies.hobbie__title")}</h3>
      <p className="hobbie__text">{t("hobbies.hobbie__text")}</p>
    </article>
  )
}
