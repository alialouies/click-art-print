import React from "react";
import img from "../img/logo.png";
// import bw from "../img/logo-bw.png";
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
            <h1>Here you can get The Rijks museum art collection to your home</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
