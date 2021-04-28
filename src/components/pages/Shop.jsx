import React from "react";
import ShopHeader from "../ShopHeader";
import Categories from "../Categories";
import InitialTransition from "../animation";
function Shop(props) {
  const { addCart, price } = props;

  return (
    <>
      <InitialTransition />
      <ShopHeader />
      <Categories addCart={addCart} price={price} />
    </>
  );
}

export default Shop;
