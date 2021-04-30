import React from "react";
// import { useForm } from 'react-hook-form';
import "../css/CheckoutForm.css";
import Purchase from './pages/Purchase'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom"

// type FormValues = {

//     firstName: string,
//     lastName: string,
//     address: string,
//     zipCode: number,
//     creditCardNumber: number,
//     expirationDate: number,
//     cvv: number

// }

function CheckoutForm() {
  // const { register } = useForm();

  function confirmPurchase() {
    <Router>
      <Switch>
        <Route path="/purchase">
          <Purchase />
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
          <input name="firstName" id="firstName" placeholder="   First Name" />

          <label htmlFor="lastName"></label>
          <input name="lastName" id="lastName" placeholder="   Last Name" />

          <label htmlFor="email"></label>
          <input name="email" id="email" placeholder="   Email" />

          <label htmlFor="address"></label>
          <input name="address" id="address" placeholder="   Address" />

          <label htmlFor="zipCode"></label>
          <input name="zipCode" id="zipCode" placeholder="   Zip Code" />

          <label htmlFor="city"></label>
          <input name="city" id="city" placeholder="   City" />

          <p>__________________________________________________</p>

          <h3>Please enter your credit card details:</h3>
          <label htmlFor="creditCardNumber"></label>
          <input
            name="creditCardNumber"
            type="number"
            id="creditCardNumber"
            placeholder="   Credit Card Number"
          />

          <label htmlFor="expirationDate"></label>
          <input
            name="expirationDate"
            type="number"
            id="expirationDate"
            placeholder="   Expiration Date"
          />

          <label htmlFor="cvv"></label>
          <input name="cvv" type="number" id="cvv" placeholder="   CVV" />

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
