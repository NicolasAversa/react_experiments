import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const propTypes = {
  addIngredientHandler: PropTypes.func.isRequired,
};

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'Meat' },
];

function BuildControls(props) {
  const { addIngredientHandler } = props;

  const controlsRendered = controls.map((control) => (
    <BuildControl
      addIngredientHandler={() => addIngredientHandler(control.type)}
      key={control.label}
      label={control.label}
    />
  ));

  return (
    <Col xs={12} className={`${styles.buildControls} py-4`}>
      {controlsRendered}
    </Col>
  );
}

BuildControls.propTypes = propTypes;

export default BuildControls;
