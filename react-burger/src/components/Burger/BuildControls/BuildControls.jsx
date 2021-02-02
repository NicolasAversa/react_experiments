import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.module.css';

const propTypes = {
  onAddIngredient: PropTypes.func,
  onRemoveIngredient: PropTypes.func,
  purchaseHandler: PropTypes.func,
  totalPrice: PropTypes.number,
  purchasable: PropTypes.bool,
  disabled: PropTypes.objectOf(PropTypes.bool),
};

const defaultProps = {
  onAddIngredient: () => {},
  onRemoveIngredient: () => {},
  purchaseHandler: () => {},
  totalPrice: 0,
  purchasable: false,
  disabled: {},
};

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

function BuildControls({
  onAddIngredient,
  onRemoveIngredient,
  purchaseHandler,
  totalPrice,
  purchasable,
  disabled,
}) {
  const controlsRendered = controls.map((control) => (
    <BuildControl
      onAddIngredient={() => onAddIngredient(control.type)}
      onRemoveIngredient={() => onRemoveIngredient(control.type)}
      key={control.label}
      label={control.label}
      disabled={disabled[control.type]}
    />
  ));

  return (
    <Row>
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
    </Row>
  );
}

BuildControls.propTypes = propTypes;
BuildControls.defaultProps = defaultProps;

export default BuildControls;
