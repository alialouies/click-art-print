import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Cart from "./components/pages/Cart";
import Navbar from "./components/Navbar";
import Checkout from "./components/pages/Checkout";
import React, { useState, useEffect } from "react";
import Purchase from './components/pages/Purchase'
import Footer from "./components/Footer"
import OurMission from "./components/OurMission"
import Form from "./components/pages/Form"


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

  useEffect(() => {
    const data = localStorage.getItem('shownCart');
    if (data) {
      setCart(JSON.parse(data))
    }
    },[])

  useEffect(() => {
    localStorage.setItem('shownCart', JSON.stringify(cart))
    },[cart])

  const deleteStorage = () => {
    localStorage.removeItem("shownCart");
  }


  const [state, setState] = React.useState({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      zipCode: "",
      creditCardNumber: "",
      expirationDate: "",
      cvv: ""
  })

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
    console.log(value)
  }


  return (
    <>
    <div id="main">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/shop"><Shop addCart={addCart} price={price}/></Route>
          <Route path="/cart"><Cart cart={cart} price={price} deleteProduct={deleteProduct}/></Route>
          <Route path="/checkout"><Checkout state={state} handleChange={handleChange} deleteStorage={deleteStorage}/></Route>
          <Route path="/purchase"><Purchase state={state}/></Route>
        </Switch>
        <Switch>
        <Route path="/ourmission"><OurMission /></Route>
        <Route path="/form"><Form/></Route>
      </Switch>
      < Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
