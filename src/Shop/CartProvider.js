import { useReducer } from "react";
import CartContext from "./cart-context";
const initalvalue = {
  items: [],
  totalAmount: 0,
};
const cartreducer = (state, action) => {
  if (action.type === "ADD") {
    console.log(action.items);
    const itemindex = state.items.findIndex((el) => {
      return el.id === action.items.id;
    });
    const currentitem = state.items[itemindex];
    let newarray;
    if (currentitem) {
      const updatedarray = {
        ...currentitem,
        amount: currentitem.amount + action.items.amount,
      };
      newarray = [...state.items];
      newarray[itemindex] = updatedarray;
    } else {
      newarray = state.items.concat(action.items);
    }
    const totalAmount =
      state.totalAmount + action.items.price * action.items.amount;

    return {
      items: newarray,
      totalAmount: totalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const filtereditem = state.items.findIndex((el) => {
      return el.id === action.id;
    });
    const currentitem = state.items[filtereditem];
    let removeitem;
    if (currentitem.amount>1) {
      const arr = {
        ...currentitem,
        amount: currentitem.amount - 1,
      };
      removeitem = [...state.items];
      removeitem[filtereditem] = arr;
    } else {
      removeitem = state.items.filter((item) => {
        return item.id !== action.id;
      });
    }
    const newamount =
      state.totalAmount - currentitem.price;
    return {
      items: removeitem,
      totalAmount: newamount,
    };
  }
  return initalvalue;
};

const Cartprovider = (props) => {
  const [cart, dispatchcart] = useReducer(cartreducer, initalvalue);
  const additemToCartHandler = (item) => {
    dispatchcart({
      type: "ADD",
      items: item,
    });
  };
  const removeitemToCartHandler = (id) => {
    dispatchcart({
      type: "REMOVE",
      id: id,
    });
  };
  const cartcontext = {
    items: cart.items,
    totalamount: cart.totalAmount,
    additem: additemToCartHandler,
    removeitem: removeitemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default Cartprovider;
