import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Icons } from "./ServiceIcons";
import "./services.css";

const Services = () => {
  return (
    <Container>
      <Row className="parent">
        <h1>My Services</h1>
        {Icons.map((icon) => (
          <Col xm={12} md={6} lg={4} key={icon.id} className="col">
            <Card style={{ width: "18rem", margin: "5px 0px" }}>
              <FontAwesomeIcon icon={icon.icon} className="icon" />

              <Card.Body>
                <Card.Title className="title">{icon.name}</Card.Title>
                <Card.Text className="text">{icon.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
