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
import Grid1_tablet from "../../Images/grid1_tablet.webp";
import Grid2_tablet from "../../Images/grid2_tablet.webp";
import Grid3_tablet from "../../Images/grid3_tablet.webp";
import Grid4_tablet from "../../Images/grid4_tablet.webp";
import Grid5_tablet from "../../Images/grid5_tablet.webp";
import Grid6_tablet from "../../Images/grid6_tablet.webp";
import "./AboutUsGrid.scss";

const AboutUsGrid = () => {
  return (
    <div className="AboutUsGrid">
      <div className="AboutUsGrid__item AboutUsGrid__item-0">
        <picture>
          <source media="(max-width: 599px)" srcSet={Grid1_mobile} />
          <source media="(max-width: 1100px)" srcSet={Grid1_tablet} />
          <img src={Grid1} alt="grid about" />
        </picture>
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-1">
        <picture>
          <source media="(max-width: 599px)" srcSet={Grid2_mobile} />
          <source media="(max-width: 1100px)" srcSet={Grid2_tablet} />
          <img src={Grid2} alt="grid about" />
        </picture>
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-3">
        <picture>
          <source media="(max-width: 599px)" srcSet={Grid3_mobile} />
          <source media="(max-width: 1100px)" srcSet={Grid3_tablet} />
          <img src={Grid3} alt="grid about" />
        </picture>
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-2">
        <picture>
          <source media="(max-width: 599px)" srcSet={Grid4_mobile} />
          <source media="(max-width: 1100px)" srcSet={Grid4_tablet} />
          <img src={Grid4} alt="grid about" />
        </picture>
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-4">
        <picture>
          <source media="(max-width: 599px)" srcSet={Grid5_mobile} />
          <source media="(max-width: 1100px)" srcSet={Grid5_tablet} />
          <img src={Grid5} alt="grid about" />
        </picture>
      </div>
      <div className="AboutUsGrid__item AboutUsGrid__item-5">
        <picture>
          <source media="(max-width: 599px)" srcSet={Grid6_mobile} />
          <source media="(max-width: 1100px)" srcSet={Grid6_tablet} />
          <img src={Grid6} alt="grid about" />
        </picture>
      </div>
    </div>
  );
};

export default AboutUsGrid;
