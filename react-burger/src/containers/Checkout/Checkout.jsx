import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/OrderList/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

const propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

function Checkout(props) {
  const [ingredients, setIngredients] = useState({});
  const [totalPrice] = useState(0);
  const { history, location, match } = props;

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryIngredients = Object.fromEntries(query.entries());
    setIngredients(queryIngredients);
  }, []);

  const checkoutCancelledHandler = () => {
    history.goBack();
  };

  const checkoutContinuedHandler = () => {
    history.replace('/checkout/contact-data');
  };

  return (
    <>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancelledHandler={checkoutCancelledHandler}
        checkoutContinuedHandler={checkoutContinuedHandler}
      />
      <Route
        path={`${match.url}/contact-data`}
        render={() => <ContactData ingredients={ingredients} totalPrice={totalPrice} />}
      />
    </>
  );
}

Checkout.propTypes = propTypes;

export default Checkout;
