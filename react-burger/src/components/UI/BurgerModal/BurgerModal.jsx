import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  purchaseContinueHandler: PropTypes.func.isRequired,
  ingredients: PropTypes.objectOf(PropTypes.number).isRequired,
  totalPrice: PropTypes.number.isRequired,
};

function BurgerModal(props) {
  const {
    show, handleClose, purchaseContinueHandler, ingredients, totalPrice,
  } = props;

  const ingredientsSummary = Object.entries(ingredients).map(([key, value]) => (
    <li key={key} className="text-capitalize">
      {key}
      :
      {` ${value}`}
    </li>
  ));

  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Your order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientsSummary}</ul>
        <p className="font-weight-bold">
          Total price:
          {` ${totalPrice.toFixed(2)}`}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="outline-success" onClick={purchaseContinueHandler}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

BurgerModal.propTypes = propTypes;

export default BurgerModal;
