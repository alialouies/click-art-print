import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Pictures from "./components/Pictures";

function App() {
  //On click - Chage state Shopping Cart
  const [cart, setCart] = React.useState([]);

  // => to add the item to cart
  const addCart = (artProduct) => {
    console.log(artProduct);
    setCart(artProduct);
  };

  //

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
        <Pictures cart={cart} addCart={addCart} />
      </div>
    </>
  );
}

export default App;
