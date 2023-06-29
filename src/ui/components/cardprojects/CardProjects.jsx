import './cardprojects.css'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack  } from '@splidejs/react-splide';
import img1 from '../../../../public/assets/images/bienesRaices_01.png';
import img2 from '../../../../public/assets/images/bienesRaices_02.png';
import img3 from '../../../../public/assets/images/bienesRaices_03.png';
import img4 from '../../../../public/assets/images/devwebcamp01.png';
import img5 from '../../../../public/assets/images/devwebcamp02.png';


export const CardProjects = () => {

    const options = {
        type         : 'loop',
        gap          : '1rem',
        autoplay     : true,
        interval: '4000',
        pauseOnHover : false,
        resetProgress: false,
      };    

  return (
    <>
       <article className="cards cards--project">
        <div className="project__image--container" data-aos="flip-right">
        <Splide
            options={ options }
            aria-labelledby="projects__autoplayimages"
            hasTrack={ false } >
                <div style={ { position: 'relative' } }>
                    <SplideTrack>
                        <SplideSlide>
                            <img src={ img1 } alt='' />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={ img2 } alt='' />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={ img3 } alt='' />
                        </SplideSlide>
                    </SplideTrack>
                </div>
            </Splide>
        </div>
        <div className="project">
          <div className="project__tags">
            <span className="project__tag">#HTML</span>
            <span className="project__tag">#CSS</span>
            <span className="project__tag">#Sass</span>
            <span className="project__tag">#Gulp</span>
            <span className="project__tag">#JavaScript</span>
            <span className="project__tag">#PHP</span>
            <span className="project__tag">#MySQL</span>
            <span className="project__tag">#Responsive</span>
          </div>
          <h2 className="project__title">Bienes Raices</h2>
          <p className="project__text">Sitio Web para Inmobiliaria con gestión y administración privada (login) para manejo de propiedades, vendedores, blogs y testimoniales de forma dinamica-CRUD + sección de contacto con formulario + Responsive + Menu de hamburguesa.  
          <br/>Construida con POO con PHP usando estructura MVC y Base de Datos MySQL (crud, normalización, cardinalidad,relación de tablas,joins,etc).
          <br/> Front-end: HTML CSS Sass Gulp Javascript. Dev Tools and testing: TablePlus, PostMan, Cypress.</p>
          <div className="buttons">
            <a href="https://warm-earth-28522.herokuapp.com" target="_blank" rel='noreferrer' className="btn btn--primary"><span>Sitio Web</span>
            </a>
            <a href="https://github.com/Lean-98/Bienes_Raices-MVC" target="_blank" rel='noreferrer' className="btn btn--ghost"><span>Code</span>
            </a>
          </div>
        </div>
      </article>  

       <article className="cards cards--project">
        <div className="project__image--container" data-aos="flip-right">
        <Splide
            options={ options }
            aria-labelledby="projects__autoplayimages"
            hasTrack={ false } >
                <div style={ { position: 'relative' } }>
                    <SplideTrack>
                        <SplideSlide>
                            <img src={ img4 } alt='' />
                        </SplideSlide>
                        <SplideSlide>
                            <img src={ img5 } alt='' />
                        </SplideSlide>
                    </SplideTrack>
                </div>
            </Splide>
        </div>
        <div className="project">
          <div className="project__tags">
            <span className="project__tag">#HTML</span>
            <span className="project__tag">#CSS</span>
            <span className="project__tag">#Sass</span>
            <span className="project__tag">#Gulp</span>
            <span className="project__tag">#JavaScript</span>
            <span className="project__tag">#PHP</span>
            <span className="project__tag">#MySQL</span>
            <span className="project__tag">#Responsive</span>
          </div>
          <h2 className="project__title">Bienes Raices</h2>
          <p className="project__text">Sitio Web para Inmobiliaria con gestión y administración privada (login) para manejo de propiedades, vendedores, blogs y testimoniales de forma dinamica-CRUD + sección de contacto con formulario + Responsive + Menu de hamburguesa.  
          <br/>Construida con POO con PHP usando estructura MVC y Base de Datos MySQL (crud, normalización, cardinalidad,relación de tablas,joins,etc).
          <br/> Front-end: HTML CSS Sass Gulp Javascript. Dev Tools and testing: TablePlus, PostMan, Cypress.</p>
          <div className="buttons">
            <a href="https://warm-earth-28522.herokuapp.com" target="_blank" rel='noreferrer' className="btn btn--primary"><span>Sitio Web</span>
            </a>
            <a href="https://github.com/Lean-98/Bienes_Raices-MVC" target="_blank" rel='noreferrer' className="btn btn--ghost"><span>Code</span>
            </a>
          </div>
        </div>
      </article>  
    </>
  )
}