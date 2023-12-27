import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/Carticon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../Shop/cart-context";
const Cartbutton = (props) => {
  const [btnhighlighted, setbtnhighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const totalitemamount = ctx.items.reduce((currvalue, index) => {
    return currvalue + index.amount;
  }, 0);
  const { items } = ctx;
  const btnanim = `${classes.button} ${btnhighlighted ? classes.bump : ""}`;
  useEffect(() => {
    setbtnhighlighted(true);
    const timer = setTimeout(() => {
      setbtnhighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer)
    };
  }, [items]);
  return (
    <button className={btnanim} onClick={props.cartbuttonhandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.yourcart}>Your Cart</span>
      <span className={classes.badge}>{totalitemamount}</span>
    </button>
  );
};
export default Cartbutton;
