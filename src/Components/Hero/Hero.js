import React from "react";
import HeroSvg from "../../ComponentAssets/HeroImage.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div class="Hero">
      <div class="HeroContainer">
        <h1>Let’s get fusely together</h1>
        <p>
          Outcome-centered product that reduce churn, optimize pricing, and grow
          your subscription business end-to-end.
        </p>
        <button>Get Started</button>
      </div>
      <img src={HeroSvg} alt="Hero" />
    </div>
  );
};

export default Hero;
