import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Navbar from "./components/Navbar";
import Checkout from "./components/pages/Checkout";
import React, { useState, useEffect } from "react";

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
          <Route exact path="/"><Home/></Route>
          <Route path="/shop"><Shop addCart={addCart}/></Route>
          <Route path="/cart"><Cart cart={cart}/></Route>
          <Route path="/checkout"><Checkout /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
