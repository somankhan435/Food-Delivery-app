import classes from './Input.module.css'
import React from 'react'
const Input=React.forwardRef((props,ref)=>{
    return <div className={classes.input}>
        <label htmlFor={props.inputs.id}>{props.label}</label>
        <input {...props.inputs} ref={ref}></input>
    </div>
})
export default Input