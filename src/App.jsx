import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Navbar from "./components/Navbar";
import Checkout from "./components/pages/Checkout";
import React, { useState, useEffect } from "react";
import Logo from './components/Logo'
import Purchase from './components/pages/Purchase'

function App() {
  const [cart, setCart] = React.useState([]);
  const price = 19.99;

  

  const addCart = (product, e) => {
    let tempState = [...cart];
    e.preventDefault();
    tempState.push(product)
    setCart(tempState)
    console.log(tempState);
  };


  const deleteProduct = (index) => {
    let tempProducts = [...cart];
    tempProducts.splice(index, 1);
    setCart(tempProducts);
  }



  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/shop"><Shop addCart={addCart} price={price}/></Route>
          <Route path="/cart"><Cart cart={cart} price={price} deleteProduct={deleteProduct}/></Route>
          <Route path="/checkout"><Checkout /></Route>
          <Route path="/purchase"><Purchase/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
