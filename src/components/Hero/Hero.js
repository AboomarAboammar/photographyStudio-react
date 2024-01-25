import React from "react";
import { NavLink } from "react-router-dom";
import "./hero.css";

import { Container } from "react-bootstrap";
const Hero = () => {
  return (
    <Container fluid>
      <div className="main">
        <div className="videoContainer">
          <video autoPlay loop muted className="show" type="video/mp4">
            <source src="/video.mp4" />
          </video>
        </div>
        <div className="content">
          <h1>PHOTOGRAGHY STUDIO</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            repellendus voluptatem dolores quae possimus esse necessitatibus
          </p>
          <NavLink to={"/services"}>
            <button className="btn">Get Started</button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
