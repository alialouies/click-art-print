import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Navbar from "./components/Navbar";
import React, { useState, useEffect } from "react";
import Pictures from "./components/Pictures";

function App() {
  const [cart, setCart] = React.useState([]);

  

  const addCart = (product, e) => {
    let tempState = [...cart];
    e.preventDefault();
    tempState.push(product)
    setCart(tempState)
    console.log(tempState);
  };



  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
      <div>
        <Pictures addCart={addCart} />
        <Cart cart={cart} />
      </div>
    </>
  );
}

export default App;
