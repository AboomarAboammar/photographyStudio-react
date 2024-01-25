import React from "react";
import "./blog.css";
import { Col, Container, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <Container className="theparenContainer">
      <Row>
        <Col md={12} lg={6}>
          <div className="img-container">
            <img src="/about.jpg" alt="" className="images" />
          </div>
        </Col>

        <Col md={12} lg={6} className="blog-content">
          <h1>ESLAM STUDIO PHOTOGRAPHY </h1>
          <h3>
            Hello, Iam Eslam Mohammed, a professional photographer based on
            Egypt
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            repudiandae, minima magnam quaerat velit neque molestias repellat
            delectus, quas ducimus alias nihil vitae sunt debitis incidunt
            quisquam minus accusantium omnis.
          </p>

          <button className="buttons">Get Started</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
