import './colorsbar.css';

export const ColorsBar = () => {

    const setColor = () => {
        const toggleColors = document.getElementById("toggle-colors");
        const rootStyles = document.documentElement.style;
        toggleColors.addEventListener("click", (e) => {
            rootStyles.setProperty('--primary-color', e.target.dataset.color);
        });
    };  

  return (
    <div id="toggle-colors" className="colors" onClick={ setColor } >
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
  );
};
