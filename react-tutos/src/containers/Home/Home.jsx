import React, { useState } from "react";
import Person from "../../components/Person/Person.jsx";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [persons, setPersons] = useState([
    { name: "Nicolas", age: 24 },
    { name: "Juan Manuel", age: 26 },
    { name: "Florencia", age: 28 },
  ]);

  const switchNameHandler = () => {
    let newPersons = [...persons];
    newPersons[1].name = "German";
    setPersons(newPersons);
  };

  return (
    <>
      <Col xs={12} className="mb-3">
        <h1>This is a React app, Hope you like it!</h1>
        <h4>Let's start the adventure!</h4>
      </Col>
      <Col xs={4}>
        <Person name={persons[0].name} age={persons[0].age} />
      </Col>
      <Col xs={4}>
        <Person name={persons[1].name} age={persons[1].age} />
      </Col>
      <Col xs={4}>
        <Person name={persons[2].name} age={persons[2].age} />
      </Col>
      <Col xs={4}>
        <Person name="Leonel" age="25">
          Me gusta la papa!
        </Person>
      </Col>
      <Col xs={12}>
        <Button onClick={switchNameHandler} variant="primary">
          Hacer algo
        </Button>
      </Col>
    </>
  );
};

export default Home;
