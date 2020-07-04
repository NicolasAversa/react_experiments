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
  const [showPersons, setShowPersons] = useState(false);

  const switchNameHandler = (newName) => {
    let newPersons = [...persons];
    newPersons[1].name = newName;
    setPersons(newPersons);
  };

  const nameChangedHandler = (event) => {
    let newPersons = [...persons];
    newPersons[1].name = event.target.value;
    setPersons(newPersons);
  };

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  return (
    <>
      <Col xs={12} className="mb-3">
        <h1>This is a React app, Hope you like it!</h1>
        <h4 className="mb-3">Let's start the adventure!</h4>
        <Button onClick={togglePersonsHandler} variant="primary">
          Alternar visibilidad
        </Button>
      </Col>
      {showPersons ? (
        <>
          <Col xs={4}>
            <Person name={persons[0].name} age={persons[0].age} />
          </Col>
          <Col xs={4}>
            <Person
              name={persons[1].name}
              age={persons[1].age}
              click={() => switchNameHandler("Pepito")}
              change={nameChangedHandler}
            />
          </Col>
          <Col xs={4}>
            <Person name={persons[2].name} age={persons[2].age} />
          </Col>
          <Col xs={4}>
            <Person name="Leonel" age="25">
              Me gusta la papa!
            </Person>
          </Col>
        </>
      ) : null}
    </>
  );
};

export default Home;
