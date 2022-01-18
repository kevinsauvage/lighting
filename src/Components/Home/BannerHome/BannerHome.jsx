import "./BannerHome.scss";
import MainImg from "../../../Images/main_pic.webp";
import MainImg_mobile from "../../../Images/main_pic_mobile.webp";
import MainImg_tablet from "../../../Images/main_pic_tablet.webp";
import Section from "../../../Layout/Section/Section";

const BannerHome = () => {
  return (
    <Section className="BannerHome">
      <h1 className="BannerHome__title">
        <span>lighting —</span> the collective of creatives and managers committed to re-thinking your
        business in a radically better way
      </h1>
      <h2 className="BannerHome__subtitle">
        We want to live in a world of people enjoying their ability to communicate and understand each other.
        We contribute to this world by making good companies gutsy enough and rethink businesses by voicing
        out their honest stories, positively shifting life patterns of their clients.
      </h2>
      <div className="BannerHome__img">
        <picture>
          <source media="(max-width: 599px)" srcSet={MainImg_mobile} />
          <source media="(max-width: 880px)" srcSet={MainImg_tablet} />
          <img src={MainImg} alt="main" width="1600" height="773" />
        </picture>
      </div>
    </Section>
  );
};

export default BannerHome;
