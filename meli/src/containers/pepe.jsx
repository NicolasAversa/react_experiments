import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: 'Hello World',
};

function Component() {
  return (
    <div>
      Text
    </div>
  );
}

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export default Component;
