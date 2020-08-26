import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Home from '../Home/Home';

const App = () => (
  <Container>
    <Row>
      <Home />
    </Row>
  </Container>
);

export default App;
