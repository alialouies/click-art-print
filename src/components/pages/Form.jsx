import React, {useState} from 'react'
import FormSignUp from '../FormSignUp'
import FormSuccess from "../FormSuccess"
import "../../css/Form.css"
import InitialTransition from "../animation"
import img from "../../img/logo-2.png"

const Form = () => {
   const [isSubmitted, setIsSubmitted] = useState(false) 

function submitForm() {
    setIsSubmitted(true); 
}

    return (
        <>
        <InitialTransition />
        <div className="form-container1">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src={img} className="form-img" />
            </div>
              {!isSubmitted ? <FormSignUp submitForm={submitForm}/> : (<FormSuccess />)}
        </div>
        </>
    ); 
}

export default Form
