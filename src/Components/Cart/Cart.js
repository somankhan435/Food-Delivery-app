import classes from "./Cart.module.css";
import ModalOverlay from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../Shop/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const totalamount = `$${cartctx.totalamount.toFixed(2)}`;
  const removefunc = cartctx.removeitem;
  const addtocarthandler=(items)=>{
    cartctx.additem({...items,amount:1})
  }
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((items) => (
        <CartItem
        key={items.id}
          amount={items.amount}
          price={items.price}
          name={items.name}
          onRemove={removefunc}
          id={items.id}
          onAdd={addtocarthandler.bind(null, items)}
        />
      ))}
    </ul>
  );
  return (
    <ModalOverlay hidecart={props.carthandler}>
      {cartitems}
      <div className={classes["cart-items"]}>
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalamount}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.carthandler}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </ModalOverlay>
  );
};
export default Cart;
