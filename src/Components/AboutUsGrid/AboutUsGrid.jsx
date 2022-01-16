import Grid1 from "../../Images/grid1.png";
import Grid2 from "../../Images/grid2.jpg";
import Grid3 from "../../Images/grid3.png";
import Grid4 from "../../Images/grid4.jpg";
import Grid5 from "../../Images/grid5.jpg";
import Grid6 from "../../Images/grid6.jpg";
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
