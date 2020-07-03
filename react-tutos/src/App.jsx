import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./containers/Home/Home.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const App = () => {
  return (
    <Container>
      <Row>
        <Home />
      </Row>
    </Container>
  );
};

export default App;
