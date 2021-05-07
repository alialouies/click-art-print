import React from "react";
import ShopHeader from "../ShopHeader";
import Categories from "../Categories";
import InitialTransition from "../animation";

function Shop(props) {
  const { addCart, price } = props;

  return (
    <>
      <div className="topmargin" style={{ marginTop: 50 }}>
        <InitialTransition />
        <ShopHeader />
        <Categories addCart={addCart} price={price} />
      </div>
    </>
  );
}

export default Shop;
