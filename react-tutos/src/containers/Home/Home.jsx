import React, { useState } from "react";
import Person from "../../components/Person/Person.jsx";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [persons, setPersons] = useState([
    {
      id: "Nicolas14",
      name: "Nicolas",
      age: 24,
      hobbies: "Me gusta programar",
    },
    {
      id: "JuanManuel26",
      name: "Juan Manuel",
      age: 26,
      hobbies: "Me gusta diseñar mi mundo",
    },
    {
      id: "Florencia28",
      name: "Florencia",
      age: 28,
      hobbies: "Me gusta ampliar mis horizontes",
    },
  ]);
  const [showPersons, setShowPersons] = useState(false);

  const nameChangedHandler = (id, event) => {
    // Finding the index of the selected person
    const personIndex = persons.findIndex((person) => {
      return person.id === id;
    });
    // Copying the person object in the persons array
    const person = { ...persons[personIndex] };
    // Editing the name property in the selected person
    person.name = event.target.value;
    // Copying the whole persons array
    const newPersons = [...persons];
    // Editing and setting the whole persons array
    newPersons[personIndex] = person;
    setPersons(newPersons);
  };

  const deletePersonHandler = (index) => {
    const newPersons = [...persons];
    newPersons.splice(index, 1);
    setPersons(newPersons);
  };

  const togglePersonsHandler = () => {
    setShowPersons(!showPersons);
  };

  let personsList = null;
  if (showPersons) {
    personsList = persons.map((person, index) => {
      return (
        <Col xs={4} key={person.id}>
          <Person
            data={person}
            click={deletePersonHandler.bind(this, index)}
            change={nameChangedHandler.bind(this, person.id)}
          >
            {person.hobbies}
          </Person>
        </Col>
      );
    });
  }

  return (
    <>
      <Col xs={12} className="mb-3">
        <h1>This is a React app, Hope you like it!</h1>
        <h4 className="mb-3">Let's start the adventure!</h4>
        <Button onClick={togglePersonsHandler} variant="primary">
          Alternar visibilidad
        </Button>
      </Col>
      {personsList}
    </>
  );
};

export default Home;
