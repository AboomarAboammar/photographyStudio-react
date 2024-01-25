import "./works.css";

import Work from "../work/Work";
import { Data } from "../../Data";
import { React, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
const Works = () => {
  const [category, setCategory] = useState("");
  const filterCategory = (category) => {
    setCategory(category);
  };

  const showAllCategory = () => {
    setCategory("");
  };

  return (
    <>
      <Container fluid="sm" style={{ marginTop: "100px" }}>
        <Row className="work-row">
          <h1> my works</h1>
          <Col className="work-col">
            <Button
              className="btn btn-warning btn"
              onClick={() => showAllCategory("")}
            >
              ِAll
            </Button>
            <Button
              className="btn btn-warning btn"
              onClick={() => filterCategory("personal")}
            >
              personal
            </Button>
            <Button
              className="btn btn-warning btn"
              onClick={() => filterCategory("event")}
            >
              event
            </Button>
            <Button
              className="btn btn-warning btn"
              onClick={() => filterCategory("weddin")}
            >
              Weddin
            </Button>
            <Button
              className="btn btn-warning btn"
              onClick={() => filterCategory("fashion")}
            >
              Fashion
            </Button>
          </Col>
        </Row>
      </Container>
      <Work data={Data} category={category} />
    </>
  );
};

export default Works;
