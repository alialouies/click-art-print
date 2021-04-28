import React from "react";
import img from "../img/logo-2.png";
import "../css/HeroSection.css";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <>
      <motion.section initial={{x: 1800, opcaticy:1}} animate={{ x: 0}} transition={{duration: 1.6, ease: [0.87, 0, 0.13, 1]}}id="hero">
        <div id="logo-container">
          <img src={img} alt="" />
        </div>
        <div id="hero-text">
          <div>
            <h1>Welcome to click art & print!</h1>
            <h2>We strive to deliver the world's greatest art conviniently to your doorstep.</h2>
          </div>
          
        </div>
      </motion.section>
    </>
  );
}

export default HeroSection;
