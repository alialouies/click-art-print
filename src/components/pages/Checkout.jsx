import React from 'react'
import CheckoutForm from '../CheckoutForm'
function Checkout(props) {
    const { state, handleChange} = props;
    return (
        <div>
            <CheckoutForm state={state} handleChange={handleChange}/>
        </div>
    )
}

export default Checkout
