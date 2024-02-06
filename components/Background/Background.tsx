import classes from "./Background.module.css";

const Background = ({ children }: any) => {
  return (
    <section className="flex flex-col justify-center items-center">
      {children}
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
      <span className={classes.span}></span>
    </section>
  );
};

export default Background;
