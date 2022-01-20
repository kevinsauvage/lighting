import "./Title.scss";

const Title = ({ children, className }) => {
  return <h1 className={`Title ${className ? className : ""}`}>{children}</h1>;
};

export default Title;
