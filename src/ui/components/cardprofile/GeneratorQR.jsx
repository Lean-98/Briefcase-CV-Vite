import QRCode from "react-qr-code";
import AOS from 'aos';
AOS.init();

export const GeneratorQR = () => {
  return (
    <div className="contenedorQR" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <QRCode  style={{ width: "70%" }}
         value="https://portfolio-leandropiazza.netlify.app" />
    </div>
  )
}
