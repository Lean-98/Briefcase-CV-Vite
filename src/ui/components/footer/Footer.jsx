import './footer.css';
import Arrow from '../../../../public/assets/images/arrow.png';
import { useTranslation } from 'react-i18next';


export const Footer = () => {
  const [ t, i18n ] = useTranslation("global");  

  const scrollUp = () => {
      window.addEventListener('scroll', () => {
        let scroll = document.documentElement.scrollTop;
        // console.log(scroll);
        let upButton = document.querySelector('#btn-scrollUp');

        if(scroll > 750) {
            upButton.style.right = 20 + "px";
        } else {
            upButton.style.right = -100 + "px";
        }
    })
  }

  scrollUp();

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();


  return (
    <>
      <a href="#start">
        <img src={ Arrow } id="btn-scrollUp" />
      </a>
      <footer className="footer">
        <div className="container"></div>
        <p> {t("footer.footer__container")} {currentYear}&copy; | {t("footer.footer__designedBy")} Leeo Piazza </p>
      </footer>
    </>
  );
};
