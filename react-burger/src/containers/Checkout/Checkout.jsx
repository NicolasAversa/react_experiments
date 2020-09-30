import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

function Checkout(props) {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
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
      <Route path={`${match.url}/contact-data`} component={ContactData} />
    </>
  );
}

export default Checkout;
