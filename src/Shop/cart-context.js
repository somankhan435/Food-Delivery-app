import React from "react";
const CartContext= React.createContext({
    items:[],
    totalamount:[],
    additem:(items)=>{},
    removeitem:(id)=>{}
})
export default CartContext