import React, { useEffect, useState} from 'react'
import '../../css/Button.css'
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom"
import Checkout from './Checkout'


function Cart(props) {
    const {cart, price, deleteProduct} = props;
    const [totalPrice, setTotalPrice] = useState(0)
    

  useEffect(() => {
    let temp = totalPrice;
    let length = cart.length;
    temp = length * price;
    setTotalPrice(temp)
   
  }, [cart])

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
                    <h4>Price: {price} €</h4>
                    <button onClick={() => deleteProduct(index)}>Delete</button>
                  </div>
                </div>
              </div>
         )
       } )}
       {cart.length !== 0 &&
       <div id="total-check">
         <h3 id="total" style={{color: 'white'}}>
            Total: {totalPrice} €
         </h3>
         <button onClick={checkOut} id="checkout-btn">
           <Link to='/checkout'>Check out</Link> 
         </button>
       </div>
       }
       
       </>
    )
}

export default Cart