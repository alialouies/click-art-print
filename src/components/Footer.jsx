import React from "react";
import "../css/Button.css";
import InitialTransition from "./animation";
import "../css/PrintArt.css";

const Footer = () => {
  return (
    <>
      <InitialTransition />
      <div id="mission-wrapper">
          <div id="mission">
              <h1 className="intro">Who we are</h1>
              <h2 className="intro">
                We are Click Art & Print, a platform to help you discover and collect
                art. Our mission is to make art more accessible to everyone. We aspire
                to make art attractive, specially to the younger generation. We want to
                share the power of art to move and freely express ourselves. We want art
                to become part of your life(style).
              </h2>
              <h1 className="intro">Our Service</h1>
              <h2 className="intro">
              We are a group of art enthusiasts who want to provide a platform for anyone who is searching for inspiration and beauty in their daily life. Each of our art pieces is carefully selected by our experts. We strive to deliver the world greatest art as quickly and hassle free as possible - you click, we print and within 24 hrs you have a high quality art print deliver to your doorstep. 
              </h2>
          </div>
      </div>
      <br />
      <br />
      <br />
      {/* <h1> "We aspire to cultivate an interest in art for younger generations" </h1> */}
    </>
  );
};

export default Footer;
