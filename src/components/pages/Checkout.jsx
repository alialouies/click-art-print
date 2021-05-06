import React from 'react'
import CheckoutForm from '../CheckoutForm'
function Checkout(props) {
    const { state, handleChange, deleteStorage} = props;
    return (
        <div>
            <CheckoutForm state={state} handleChange={handleChange} deleteStorage={deleteStorage}/>
        </div>
    )
}

export default Checkout
