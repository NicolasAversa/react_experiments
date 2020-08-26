import React from 'react';

import PropTypes from 'prop-types';
import Person from './Person/Person';

const propTypes = {
  showPersons: PropTypes.bool.isRequired,
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

function PersonsList(props) {
  const { showPersons, isAuthenticated, click, change } = props;

  let personsList = null;
  if (showPersons) {
    personsList = props.persons.map((person, index) => (
      <Person
        key={person.id}
        person={person}
        click={(event) => click(event, index)}
        change={(event) => change(event, person.id)}
        isAuthenticated={isAuthenticated}
      >
        {person.hobbies}
      </Person>
    ));
  }
  return <>{personsList}</>;
}

PersonsList.propTypes = propTypes;

export default PersonsList;
