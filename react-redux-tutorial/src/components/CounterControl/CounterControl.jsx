import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

function CounterControl({ label, clicked }) {
  return (
    <Button type="primary" onClick={clicked}>
      {label}
    </Button>
  );
}

CounterControl.propTypes = propTypes;

export default CounterControl;
