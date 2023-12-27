import { Fragment } from "react";
import classes from "./Header.module.css";
import mealimage from "../assets/meals.jpg";
import Cartbutton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <Cartbutton cartbuttonhandler={props.carthandler}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealimage} />
      </div>
    </Fragment>
  );
};
export default Header