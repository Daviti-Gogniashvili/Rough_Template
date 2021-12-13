import React from "react";
import Binator from "../../ComponentAssets/BinatorLogo.svg";
import BuyMe from "../../ComponentAssets/BuyMeLogo.svg";
import Loogipsum from "../../ComponentAssets/LoogipsumLogo.svg";
import Square from "../../ComponentAssets/SquareLogo.svg";
import Umbrella from "../../ComponentAssets/UmbrellaLogo.svg";
import SectionImage from "../../ComponentAssets/Section1Image.svg";
import Section2Image from "../../ComponentAssets/Section2Image.svg";
import Section3Image from "../../ComponentAssets/Section3Image.svg";
import img1 from '../../ComponentAssets/Rectangle 11.png';
import img2 from '../../ComponentAssets/Rectangle 11 (1).png';
import img3 from '../../ComponentAssets/Rectangle 11 (2).png';

import "./Main.css";

const Main = () => {
  return (
    <main class="Main">
      <section class="Partners">
        <img src={Binator} alt="Binator" />
        <img src={BuyMe} alt="BuyMe" />
        <img src={Loogipsum} alt="Loogipsum" />
        <img src={Umbrella} alt="Umbrella" />
        <img src={Square} alt="Square" />
      </section>
      <section class="Section">
        <img src={SectionImage} alt="SectionImage" />
        <div class="SectionContainer">
          <h2>Detailed Examination</h2>
          <p>
            A daily dataset to keep you up to date on subscription market trends
            and what's happening in your vertical.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <section class="Section2">
        <div class="Section2Container">
          <h2>Creative Solutions</h2>
          <p>
            Creativity is our second name. We're full of inventive ideas and
            we're happy to present them to you.
          </p>
          <button>Learn More</button>
        </div>
        <img src={Section2Image} alt="Section2Image" />
      </section>
      <section class="Section">
        <img src={Section3Image} alt="Section3Image" />
        <div class="SectionContainer">
          <h2>Professional Team</h2>
          <p>
            Well, obviously, we're professionals. Don't hesitate - get to know
            us better.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <section class="Pricing">
        <h2>Choose your plan</h2>
        <div class="PricingCardsGrid">
          <div class="card">
            <p>Starter</p>
            <h2>Free</h2>
            <div class="textC">
              <p>Dashboard</p>
              <p>Unlimited Support</p>
              <p>Forever free</p>
            </div>
            <div class="button">
              <button>Get Started</button>
            </div>
          </div>
          <div class="card1">
            <p>Premium</p>
            <h2>
              $29
              <span>/month</span>
            </h2>
            <div class="textC1">
              <p>Dashboard</p>
              <p>Unlimited Support</p>
              <p>Forever free</p>
            </div>
            <div class="button1">
              <button>Get Started</button>
            </div>
          </div>
          <div class="card">
            <p>Enterprise</p>
            <h2>
              $49
              <span>/month</span>
            </h2>
            <div class="textC">
              <p>
                All features in <span>Premium</span>
              </p>
              <p>Realtime overview</p>
              <p>Mobile app</p>
            </div>
            <div class="button">
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <section class="Blog">
        <div class="Heading">
          <h2>From our blog</h2>
          <button>View all</button>
        </div>
        <div class="Content">
          <div class="card">
            <img src={img1} alt="img1" />
            <div>
              <h4>What's Fusely?</h4>
              <p>
                A brand new company, created for everyone. This article will
                help you understand what "fusely" stands for.
              </p>
            </div>
            <a href={""}>Read more</a>
          </div>
          <div class="card">
            <img src={img2} alt="img2" />
            <div>
              <h4>Introducing Fusely Engage</h4>
              <p>
                We’re happy to announce the Fusely Engage. The first growth
                automation platform designed for the digital interactions.
              </p>
            </div>
            <a href={""}>Read more</a>
          </div>
          <div class="card">
            <img src={img3} alt="img3" />
            <div>
              <h4>Premium vs Enterprise plan</h4>
              <p>
                Let’s compare our most popular plans: Premium and Enterprise.
                This article will help you decide which one will be better for
                your needs.
              </p>
            </div>
            <a href={""}>Read more</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
