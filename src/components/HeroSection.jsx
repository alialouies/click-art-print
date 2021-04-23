import React from "react";
import img from "../img/logo-2.png";
import "../css/HeroSection.css";

function HeroSection() {
  return (
    <>
      <section id="hero">
        <div id="logo-container">
          <img src={img} alt="" />
        </div>
        <div id="hero-text">
          <div>
            <h1>Welcome to click art & print!</h1>
            <h2>We strive to deliver the world's greatest art conviniently to your doorstep.</h2>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default HeroSection;
