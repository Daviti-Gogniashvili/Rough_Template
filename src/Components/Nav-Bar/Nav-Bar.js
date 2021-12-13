import React from "react";
import Logo from "../../ComponentAssets/Logo.svg";
import './Nav-Bar.css';

const NavBar = () => {
  return (
    <div>
      <nav class="nav-bar">
        <div class="logo">
          <img src={Logo} alt="logo" />
          <p>fusely</p>
        </div>
        <ul class="list">
          <li>
            <a href={"/"}>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href={"#"}>
              <span>Features</span>
            </a>
          </li>
          <li>
            <a href={"#"}>
              <span>Pricing</span>
            </a>
          </li>
          <li>
            <a href={"#"}>
              <span>Blog</span>
            </a>
          </li>
          <li>
            <a href={"#"}>
              <span>Contact</span>
            </a>
          </li>
        </ul>
        <form class="Login_Register">
            <button id="LRButton1">Log In</button>
            <button id="LRButton2">Get Started</button>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
