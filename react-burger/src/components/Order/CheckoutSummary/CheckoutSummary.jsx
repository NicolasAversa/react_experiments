import React from 'react';
import Button from 'react-bootstrap/Button';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Burger from '../../Burger/Burger';

function CheckoutSummary(props) {
  const { ingredients } = props;
  return (
    <>
      <Auxiliary className="d-flex justify-content-center my-3">
        <h1>Hope you like it!</h1>
      </Auxiliary>
      <Burger ingredients={ingredients} />
      <Auxiliary className="d-flex justify-content-center my-3">
        <Button variant="outline-danger" className="mx-2">CANCEL</Button>
        <Button variant="outline-success" className="mx-2">CONTINUE</Button>
      </Auxiliary>
    </>
  );
}

export default CheckoutSummary;