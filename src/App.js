import "./App.css";
import React from "react";
import About from "./components/about/About";
import Sidebar from "./components/sidebar/Sidebar";
import Portfolio from "./components/portfolio/Portfolio";
import Home from "./components/home/Home";
import Resume from "./components/resume/Resume";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Service from "./components/service/Service";

const App = () => {
  return (
    <>
      <Sidebar/>
      <main className="main">
        <Home />
        <About />
        <Service />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main> 
    </>
  )
}

export default App;
