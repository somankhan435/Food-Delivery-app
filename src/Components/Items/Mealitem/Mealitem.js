import classes from './Mealitem.module.css'
import MealForm from './MealForm'
import { useContext } from 'react'
import CartContext from '../../../Shop/cart-context'
const Mealitem=(props)=>{
    const cartitems=useContext(CartContext)
    const addtocartHandler=(amount)=>{
        cartitems.additem({
            price:+props.price,
            amount:amount,
            id:props.id,
            name:props.name
        })
        
    }
    return <li className={classes.meal}>
        <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{props.price}</p>
        </div>
        <div>
        <MealForm id={props.id} addtocart={addtocartHandler}  />
        </div>
    </li>
}
export default Mealitem