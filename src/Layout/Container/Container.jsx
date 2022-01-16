import "./Container.scss";

const Container = ({ children, className, ...rest }) => {
  return (
    <div {...rest} className={`Container ${className}`}>
      {children}
    </div>
  );
};

export default Container;
