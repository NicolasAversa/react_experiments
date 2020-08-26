import React from 'react';
import PropTypes from 'prop-types';
import Person from './Person/Person';

const propTypes = {
  showPersons: PropTypes.bool.isRequired,
  persons: PropTypes.arrayOf(PropTypes.object).isRequired,
  click: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
};

function PersonsList(props) {
  const { showPersons, click, change } = props;

  let personsList = null;
  if (showPersons) {
    personsList = props.persons.map((person, index) => (
      <Person
        key={person.id}
        personName={person.name}
        personAge={person.age}
        person={person}
        click={() => click(index)}
        change={(event) => change(event, person.id)}
      >
        {person.hobbies}
      </Person>
    ));
  }
  return <>{personsList}</>;
}

PersonsList.propTypes = propTypes;

export default React.memo(PersonsList);
