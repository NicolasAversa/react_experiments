import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'Meat' },
];

const controlsRendered = controls.map((control) => (
  <BuildControl key={control.label} label={control.label} />
));

function BuildControls() {
  return (
    <Col xs={12} className={`${styles.buildControls} py-4`}>
      {controlsRendered}
    </Col>
  );
}

export default BuildControls;
