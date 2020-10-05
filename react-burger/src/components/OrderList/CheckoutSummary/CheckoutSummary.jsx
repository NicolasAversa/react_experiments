import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Burger from '../../Burger/Burger';

const propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number),
  checkoutCancelledHandler: PropTypes.func.isRequired,
  checkoutContinuedHandler: PropTypes.func.isRequired,
};

const defaultProps = { ingredients: {} };

function CheckoutSummary(props) {
  const { ingredients, checkoutCancelledHandler, checkoutContinuedHandler } = props;

  return (
    <>
      <Auxiliary className="d-flex justify-content-center my-3">
        <h1>Hope you like it!</h1>
      </Auxiliary>
      <Burger ingredients={ingredients} />
      <Auxiliary className="d-flex justify-content-center my-3">
        <Button variant="outline-danger" onClick={checkoutCancelledHandler} className="mx-2">
          CANCEL
        </Button>
        <Button variant="outline-success" onClick={checkoutContinuedHandler} className="mx-2">
          CONTINUE
        </Button>
      </Auxiliary>
    </>
  );
}

CheckoutSummary.propTypes = propTypes;
CheckoutSummary.defaultProps = defaultProps;

export default CheckoutSummary;
