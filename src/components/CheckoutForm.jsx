import React, { useEffect, useState} from 'react'
// import { useForm } from 'react-hook-form';
import "../css/CheckoutForm.css";
import Purchase from './pages/Purchase'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom"

function CheckoutForm(props) {
  const {state, handleChange} = props;

  function confirmPurchase() {
    <Router>
      <Switch>
        <Route path="/purchase">
        </Route>
      </Switch>
    </Router>;
  }

  return (
    <>
    
      <div className="form-container">
        <form>
          <h3>Please enter your shipping address:</h3>
          <label htmlFor="firstName"></label>
          <input 
            name="firstName" 
            id="firstName" 
            placeholder="   First Name"
            value={state.firstName}
            onChange={handleChange} />

          <label htmlFor="lastName"></label>
          <input 
            name="lastName" 
            id="lastName" 
            placeholder="   Last Name" 
            value={state.lastName}
            onChange={handleChange} />

          <label htmlFor="email"></label>
          <input 
            name="email" 
            id="email" 
            placeholder="   Email" 
            value={state.email}
            onChange={handleChange} />

          <label htmlFor="address"></label>
          <input 
            name="address" 
            id="address" 
            placeholder="   Address" 
            value={state.address}
            onChange={handleChange} />

          <label htmlFor="zipCode"></label>
          <input 
            name="zipCode" 
            id="zipCode" 
            placeholder="   Zip Code"
            value={state.zipCode}
            onChange={handleChange} /> />

          <label htmlFor="city"></label>
          <input 
            name="city" 
            id="city" 
            placeholder="   City" 
            value={state.city}
            onChange={handleChange} />

          <p>__________________________________________________</p>

          <h3>Please enter your credit card details:</h3>
          <label htmlFor="creditCardNumber"></label>
          <input
            name="creditCardNumber"
            type="number"
            id="creditCardNumber"
            placeholder="   Credit Card Number"
            value={state.creditCardNumber}
            onChange={handleChange} />
          

          <label htmlFor="expirationDate"></label>
          <input
            name="expirationDate"
            type="number"
            id="expirationDate"
            placeholder="   Expiration Date"
            value={state.expirationDate}
            onChange={handleChange} />
          

          <label htmlFor="cvv"></label>
          <input name="cvv" 
            type="number" 
            id="cvv" p
            laceholder="   CVV" 
            value={state.cvv}
            onChange={handleChange} />

          <button onClick={confirmPurchase}>
            <Link to="/purchase">Buy now</Link>
          </button>
        </form>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}

export default CheckoutForm;
