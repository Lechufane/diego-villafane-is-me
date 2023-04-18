import React from "react";
import Logo from "../Logo/Logo";
import classes from "./Navbar.module.css";
import Image from "next/image";
import ScrollButton from "../ui/ScrollButton";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <section className={classes.section}>
      <nav className={classes.navbar}>
        <div className={classes.links}>
          <Logo />
          <ul className={classes.list}>
            <li className={classes.listItem}>Home</li>
            <li className={classes.listItem}>Studio</li>
            <li className={classes.listItem}>Work</li>
            <li className={classes.listItem}>Contact</li>
          </ul>
        </div>
        <div className={classes.searchbar}>
          <Image
            className={classes.img}
            src='/icons/searchIcon.svg'
            alt='searchIcon'
            width={20}
            height={20}
          />
          <div style={{ width: "100px", margin: "20px" }}>
            <ScrollButton link="#Contact">Hire now!</ScrollButton>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
