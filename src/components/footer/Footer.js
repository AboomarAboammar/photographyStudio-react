import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Container fluid>
      <Row className="footer-row">
        <Col xs={6} sm={3}>
          <h2> About Us</h2>
          <div className="footer-link">
            <Link to={"/"}> Home</Link>
            <Link to={"/"}> About</Link>
            <Link to={"/"}> Services</Link>
            <Link to={"/"}> Blog</Link>
          </div>
        </Col>

        <Row className="footer-row">
          <Col
            xs={6}
            sm={3}
            className="w-100 h-auto d-flex align-items-center justify-content-between"
          >
            <h1>Eslam Studio</h1>

            <span className="">
              Copyright © eslam studio All Rights Reserved
            </span>
            <div className="icons">
              <Link className="icon-footer" to={"/"}>
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </Link>
              <Link className="icon-footer" to={"/"}>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link className="icon-footer" to={"/"}>
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link className="icon-footer" to={"/"}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Footer;
