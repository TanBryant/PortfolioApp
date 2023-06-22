import React from "react";
import './home.scss';
import Me from '../../assets/avata.jpg';
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Nhat Tan Nguyen</h1>
        <span className="home__education">I'm a Front-End developer</span>
        <HeaderSocials />
        <a href="#contact" className="btn btn-hire-me">
          {" "}
          Hire Me
        </a>
        <ScrollDown />
      </div>

      
      <Shapes />
    </section>
  );
};

export default Home;
