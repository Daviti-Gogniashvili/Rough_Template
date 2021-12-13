import React from "react";
import icon1 from "../../ComponentAssets/Social media icon.png";
import icon2 from "../../ComponentAssets/Social media icon (1).png";
import icon3 from "../../ComponentAssets/Social media icon (2).png";
import Logo from "../../ComponentAssets/Logo (1).svg";
import "./Footer.css";

const Footer = () => {
  return (
    <section class="Footer">
      <div class="FooterContent">
        <div class="footerCard">
          <h4>Product</h4>
          <ul class="footerList">
            <li>
              <a>How it works</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Download</a>
            </li>
          </ul>
        </div>
        <div class="footerCard">
          <h4>Company</h4>
          <ul class="footerList">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Partnership</a>
            </li>
            <li>
              <a>Terms of use</a>
            </li>
            <li>
              <a>Privacy policy</a>
            </li>
          </ul>
        </div>
        <div class="footerCard last1">
          <h4>Support</h4>
          <ul class="footerList1">
            <li>
              <a>Help center</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
          </ul>
        </div>
        <div class="footerCard last2">
          <h4>Get in touch</h4>
          <div class="footerLogos">
            <a>
              <img src={icon1} alt="icon1"></img>
            </a>
            <a>
              <img src={icon2} alt="icon2"></img>
            </a>
            <a>
              <img src={icon3} alt="icon3"></img>
            </a>
          </div>
        </div>
      </div>
      <div class="footerInfo">
          <img src={Logo} alt="Logo"/>
          <p>© Fusely 2021. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
