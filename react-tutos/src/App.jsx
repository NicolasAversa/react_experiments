import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Person from "./containers/Person/Person.jsx";
import "./App.css";

const App = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>This is a React app, Hope you like it!</h1>
          <h4>Let's start the adventure!</h4>
        </Col>
        <Col xs={4}>
          <Person name="Nicolas" age="24" />
        </Col>
        <Col xs={4}>
          <Person name="Juan Manuel" age="26" />
        </Col>
        <Col xs={4}>
          <Person name="Florencia" age="28" />
        </Col>
        <Col xs={4}>
          <Person name="Leonek" age="25" />
          Me gusta la papa!
          <Person />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
