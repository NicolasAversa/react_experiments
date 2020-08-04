import React from "react";

import PropTypes from "prop-types";
import Person from "./Person/Person.jsx";

const propTypes = {
  showPersons: PropTypes.bool,
  persons: PropTypes.arrayOf(PropTypes.object),
  click: PropTypes.func,
  change: PropTypes.func,
};

function PersonsList(props) {
  let personsList = null;
  if (props.showPersons) {
    personsList = props.persons.map((person, index) => {
      return (
        <Person
          key={person.id}
          person={person}
          click={props.click.bind(this, index)}
          change={props.change.bind(this, person.id)}
        >
          {person.hobbies}
        </Person>
      );
    });
  }
  return <>{personsList}</>;
}

PersonsList.propTypes = propTypes;

export default PersonsList;
