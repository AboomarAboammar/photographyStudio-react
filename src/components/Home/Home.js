import React from "react";
//import "./home.css";

import Hero from "../Hero/Hero";
import Blog from "../blog/Blog";
import Services from "../Services/Services";
import About from "../About/About";
import Footer from "../footer/Footer";

import Works from "../Works/Works";

const Home = () => {
  return (
    <>
      <Hero />
      <Blog />
      <Services />
      <About />

      <Works />
      <Footer />
    </>
  );
};

export default Home;
