import React from 'react'
import '../../css/Button.css'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom"
import Checkout from './Checkout'

function Cart(props) {
    const {cart, price} = props;

    function checkOut() {
       <Router>
         <Switch>
         <Route path='/checkout'><Checkout/></Route>
         </Switch>
       </Router>
    }

    return (
       <>
       {cart && cart.map((product, index) => {
          return (
            <div className="card" key={index}>
                <div className="part2">
                  <img src={product[0]} alt="" style={{ width: "100%" }} />
                  <div className="test">
                    <h3>Artist: {product[2]}</h3>
                    <h4>Title: {product[1]}</h4>
                    <h4 style={{ color: "red" }}>Price: {price} €</h4>
                  </div>
                </div>
              </div>
         )
       } )}
       <div>
         <button onClick={checkOut} id="checkout-btn">
           <Link to='/checkout'>Check out</Link> 
         </button>
       </div>
       </>
    )
}

export default Cart