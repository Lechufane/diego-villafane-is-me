import classes from "./Background.module.css";

const Background = ({ children }: any) => {
  return (
    <section className={classes.body}>
      <span className={classes.backgroundColor}>{children}</span>
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
