import React, { useState } from 'react';
import PersonsList from '../../components/PersonList/PersonsList';
import Header from '../../components/Header/Header';
import AuthContext from '../../context/auth-context';

const Home = () => {
  const [persons, setPersons] = useState([
    {
      id: 'Nicolas14',
      name: 'Nicolas',
      age: 24,
      hobbies: 'Me gusta programar',
    },
    {
      id: 'JuanManuel26',
      name: 'Juan Manuel',
      age: 26,
      hobbies: 'Me gusta diseñar mi mundo',
    },
    {
      id: 'Florencia28',
      name: 'Florencia',
      age: 28,
      hobbies: 'Me gusta ampliar mis horizontes',
    },
  ]);

  const [showPersons, setShowPersons] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const nameChangedHandler = (event, id) => {
    // Finding the index of the selected person
    const personIndex = persons.findIndex((person) => person.id === id);
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

  const loginHandler = () => {
    setAuthenticated(true);
  };

  return (
    <>
      <AuthContext.Provider value={{ loginHandler }}>
        <Header
          personsLength={persons.length}
          showPersons={showPersons}
          click={togglePersonsHandler}
        />
      </AuthContext.Provider>
      <AuthContext.Provider value={{ authenticated }}>
        <PersonsList
          persons={persons}
          showPersons={showPersons}
          click={deletePersonHandler}
          change={nameChangedHandler}
        />
      </AuthContext.Provider>
    </>
  );
};

export default React.memo(Home);
