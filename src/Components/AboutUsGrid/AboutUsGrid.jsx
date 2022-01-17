import Grid1 from "../../Images/grid1.webp";
import Grid2 from "../../Images/grid2.webp";
import Grid3 from "../../Images/grid3.webp";
import Grid4 from "../../Images/grid4.webp";
import Grid5 from "../../Images/grid5.webp";
import Grid6 from "../../Images/grid6.webp";
import Grid1_mobile from "../../Images/grid1_mobile.webp";
import Grid2_mobile from "../../Images/grid2_mobile.webp";
import Grid3_mobile from "../../Images/grid3_mobile.webp";
import Grid4_mobile from "../../Images/grid4_mobile.webp";
import Grid5_mobile from "../../Images/grid5_mobile.webp";
import Grid6_mobile from "../../Images/grid6_mobile.webp";
import "./AboutUsGrid.scss";

const AboutUsGrid = () => {
  return (
    <div className="AboutUsGrid">
      <div className="AboutUsGrid__item AboutUsGrid__item-0">
        <picture>
          <source media="(max-width: 599px)" srcset={Grid1_mobile} />
          <img src={Grid1} alt="grid about" />
        </picture>
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-1">
        <picture>
          <source media="(max-width: 599px)" srcset={Grid2_mobile} />
          <img src={Grid2} alt="grid about" />
        </picture>
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-3">
        <picture>
          <source media="(max-width: 599px)" srcset={Grid3_mobile} />
          <img src={Grid3} alt="grid about" />
        </picture>
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-2">
        <picture>
          <source media="(max-width: 599px)" srcset={Grid4_mobile} />
          <img src={Grid4} alt="grid about" />
        </picture>
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-4">
        <picture>
          <source media="(max-width: 599px)" srcset={Grid5_mobile} />
          <img src={Grid5} alt="grid about" />
        </picture>
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-5">
        <picture>
          <source media="(max-width: 599px)" srcset={Grid6_mobile} />
          <img src={Grid6} alt="grid about" />
        </picture>
      </div>
    </div>
  );
};

export default AboutUsGrid;
