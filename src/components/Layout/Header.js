import React, { Fragment } from "react";

import classes from "./Header.module.css";
import MealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>

      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="A table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
