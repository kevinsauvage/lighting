import Section from "../../../Layout/Section/Section";
import AboutUsGrid from "../../AboutUsGrid/AboutUsGrid";
import "./AboutHome.scss";

const AboutHome = () => {
  return (
    <Section className="AboutHome">
      <h3 className="AboutHome__title">ABOUT US</h3>
      <h4 className="AboutHome__subtitle">
        The collective of creatives and managers committed to re-thinking your business in a radically better
        way.
      </h4>
      <p className="AboutHome__text">
        Instead of designing and redesigning we now have recreated our agency into a collective embracing
        business design — rethinking companies fundamentally by our brave and conscious approach spiced with
        cross-dimensional creative expertise and endless talent capacity.
      </p>
      <AboutUsGrid />
    </Section>
  );
};

export default AboutHome;
