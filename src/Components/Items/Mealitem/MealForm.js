import { useRef } from "react";
import Input from "../../UI/Input";
import classes from './Mealform.module.css'
const MealForm = (props) => {
  const amount=useRef()
  const amountSubmitHandler=(event)=>{
    event.preventDefault();
    const enteredamount=+amount.current.value
    if(enteredamount<1 || enteredamount>5 ){
      return;
    }
    props.addtocart(enteredamount)
  }
  return (
    <form className={classes.form} onSubmit={amountSubmitHandler}>
      <Input
      ref={amount}
        label="Amount"
        inputs={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ ADD</button>
    </form>
  );
};
export default MealForm
