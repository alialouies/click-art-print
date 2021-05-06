import React from "react";
import "../css/PrintArt.css";
import { motion } from "framer-motion";

function ThankYou(props) {
  const {state} = props;
  return (
    <>
      <motion.section
        initial={{ x: 1800, opcaticy: 1 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.6, ease: [0.87, 0, 0.13, 1] }}
      >
        <div className="intro">
          <h1>Thank you, {state.firstName.toUpperCase()} </h1>
          <h2>
            Your order has been placed and will be shipped to {state.address.toUpperCase()} as fast as
            humanly possible!
          </h2>
          <h2>We sent a copy of your order to {state.email.toUpperCase()}</h2>
          <h2>PS: We hope you enjoyed our presentation this time!</h2>
        </div>
      </motion.section>
    </>
  );
}

export default ThankYou;
