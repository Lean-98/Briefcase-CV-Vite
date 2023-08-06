import { useState } from 'react';
import './cardprojects.css';
import AOS from 'aos';
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { projectsEn, projectsEs, projectsPt } from './projects.js';
import { useTranslation } from 'react-i18next';

AOS.init();

export const CardProjects = () => {
  const [t, i18n] = useTranslation("global");
  const [currentPage, setCurrentPage] = useState(0);

  const options = {
    type: 'loop',
    autoHeight: true,
    arrows: false,
    pagination: true,
    autoplay: true,
    interval: '5000',
    pauseOnHover: true,
  };


  const filteredProjects = () => {
    if (i18n.language === "en")
      return projectsEn.slice(currentPage, currentPage + 4);
    if (i18n.language === "pt")
      return projectsPt.slice(currentPage, currentPage + 4);
    return projectsEs.slice(currentPage, currentPage + 4);
  };

  const nextPage = () => {
    if (
      projectsEn.length > currentPage + 4 ||
      projectsEs.length > currentPage + 4 ||
      projectsPt.length > currentPage + 4
    )
      setCurrentPage(currentPage + 4);
  };

  const PrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 4);
  };

  return (
    <>
  
          {filteredProjects().map(({ id, image, title, description, techstack, github, demo }) => {
            return (
              <article key={id} className="cards cards--project">
                <div className="project__image--container" data-aos="flip-right">
                  <Splide
                    options={options}
                    aria-labelledby="portfolio__autoplayimages"
                    hasTrack={false}
                  >
                    <div style={{ position: "relative" }}>
                      <SplideTrack>
                        <SplideSlide>
                          <img src={image[0]} alt={title} />
                        </SplideSlide>
                        <SplideSlide>
                          <img src={image[1]} alt={title} />
                        </SplideSlide>
                      </SplideTrack>
                    </div>
                  </Splide>
                </div>

                <div className="project">
                      <div className="project__tags">
                      { techstack.map((stack) => (<span className="project__tag">{stack}</span>)) }
                      </div>

                      <h2 className="project__title">{title}</h2>
                      <p className="project__text">{description}</p>

                      <div className="buttons">
                        <a href={demo} target="_blank" rel='noreferrer' className="btn btn--primary"><span>{t("projects.project__Live")}</span></a>
                        <a href={github} target="_blank" rel='noreferrer' className="btn btn--ghost"><span>Github</span></a>
                      </div>
                </div>
              </article>
            );
          })}

        <div className="pagination">
          <button onClick={PrevPage} className="btn-pagination">
            {t("projects.project__paginationPrev")}
          </button>
          <button onClick={nextPage} className="btn-pagination">
            {t("projects.project__paginationNext")}
          </button>
        </div>

    </>
  );
};
