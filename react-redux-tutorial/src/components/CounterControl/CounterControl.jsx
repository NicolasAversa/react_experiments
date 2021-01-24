import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
};

function CounterControl({ label, onClick, disabled }) {
  return (
    <Button type="primary" disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );
}

CounterControl.propTypes = propTypes;
CounterControl.defaultProps = defaultProps;

export default CounterControl;
