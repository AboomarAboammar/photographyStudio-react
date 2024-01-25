import React from "react";
import "./work.css";
import { Col, Container, Row } from "react-bootstrap";

const Work = ({ data, category }) => {
  const filterCategory = category
    ? data.filter((item) => item.category === category)
    : data;

  return (
    <Container style={{ height: "100%vh" }}>
      <Row className="work-parent">
        {filterCategory.map((item) => (
          <Col sm={6} md={4} lg={3} key={item.id} className="imgContainer">
            <div className="img-contain">
              <img src={item.imgUrl} alt="" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Work;
