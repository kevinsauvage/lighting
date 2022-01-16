import "./Section.scss";

const Section = ({ children, className }) => {
  return <section className={`Section ${className}`}>{children}</section>;
};

export default Section;
