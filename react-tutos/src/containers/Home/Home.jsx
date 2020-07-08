import React, { useState } from "react";
import Person from "../../components/Person/Person.jsx";

import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
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
        <Person
          key={person.id}
          data={person}
          click={deletePersonHandler.bind(this, index)}
          change={nameChangedHandler.bind(this, person.id)}
        >
          {person.hobbies}
        </Person>
      );
    });
  }

  let buttonVariant = "";
  if (showPersons) {
    buttonVariant = "danger";
  } else {
    buttonVariant = "success";
  }

  // It's possible to join classes with alertVariant += " danger bold"
  let alertVariant = "";
  if (persons.length >= 3) {
    alertVariant = "success";
  }
  if (persons.length <= 2) {
    alertVariant = "danger";
  }

  return (
    <>
      <Col xs={12} className="mb-3">
        <h1>This is a React app, Hope you like it!</h1>
        <Alert variant={alertVariant} className="mb-3">
          Your list has {persons.length} persons
        </Alert>
        <Button variant={buttonVariant} onClick={togglePersonsHandler}>
          Alternar visibilidad
        </Button>
      </Col>
      {personsList}
    </>
  );
};

export default Home;
