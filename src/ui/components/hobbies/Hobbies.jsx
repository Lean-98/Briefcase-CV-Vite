import './hobbies.css';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack  } from '@splidejs/react-splide';
import {
    Bike01, 
    Bike02,  
    Swimming, 
    Gym,   
} from './index';

export default function Hobbies() {

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
      <h2 className="card__title-hobbies">Hobbies</h2>
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
      <h3 className="hobbie__title">Biking, Swimming and Gym </h3>
      <p className="hobbie__text">En mi tiempo libre me gusta entrenar y andar en bicicleta. De adolescente nadé durante casi dos años, es un deporte que me encanta y me relaja.</p>
    </article>
  )
}
