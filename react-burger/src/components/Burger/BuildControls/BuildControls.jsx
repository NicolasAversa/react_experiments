import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const propTypes = {
  addIngredientHandler: PropTypes.func.isRequired,
  removeIngredientHandler: PropTypes.func.isRequired,
  purchaseHandler: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  purchasable: PropTypes.bool.isRequired,
  disabled: PropTypes.objectOf(PropTypes.bool).isRequired,
};

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

function BuildControls(props) {
  const {
    addIngredientHandler,
    removeIngredientHandler,
    purchaseHandler,
    totalPrice,
    purchasable,
    disabled,
  } = props;

  const controlsRendered = controls.map((control) => (
    <BuildControl
      addIngredientHandler={() => addIngredientHandler(control.type)}
      removeIngredientHandler={() => removeIngredientHandler(control.type)}
      key={control.label}
      label={control.label}
      disabled={disabled[control.type]}
    />
  ));

  return (
    <Col xs={12} className={`${styles.buildControls} py-4 d-flex align-items-center flex-column`}>
      <p>
        Current price:
        <b className="font-weight-bold d-inline">{` ${totalPrice.toFixed(2)}`}</b>
      </p>
      {controlsRendered}
      <Button
        className={`${styles.orderButton} mt-3 border-0`}
        onClick={purchaseHandler}
        disabled={!purchasable}
      >
        ORDER NOW
      </Button>
    </Col>
  );
}

BuildControls.propTypes = propTypes;

export default BuildControls;
