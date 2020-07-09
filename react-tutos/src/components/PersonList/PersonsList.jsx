import React from "react";
import Person from "./Person/Person.jsx";

const PersonsList = (props) => {
  let personsList = null;
  if (props.showPersons) {
    personsList = props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          data={person}
          click={props.click.bind(this, index)}
          change={props.change.bind(this, person.id)}
        >
          {person.hobbies}
        </Person>
      );
    });
  }
  return <>{personsList}</>;
};

export default PersonsList;
