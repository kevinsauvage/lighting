import Grid1 from "../../Images/grid1.webp";
import Grid2 from "../../Images/grid2.webp";
import Grid3 from "../../Images/grid3.webp";
import Grid4 from "../../Images/grid4.webp";
import Grid5 from "../../Images/grid5.webp";
import Grid6 from "../../Images/grid6.webp";
import "./AboutUsGrid.scss";

const AboutUsGrid = () => {
  return (
    <div className="AboutUsGrid">
      <div className="AboutUsGrid__item AboutUsGrid__item-0">
        <img src={Grid1} alt="grid about" />
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-1">
        <img src={Grid2} alt="grid about" />
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-3">
        <img src={Grid3} alt="grid about" />
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-2">
        <img src={Grid4} alt="grid about" />
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-4">
        <img src={Grid5} alt="grid about" />
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-5">
        <img src={Grid6} alt="grid about" />
      </div>
    </div>
  );
};

export default AboutUsGrid;
