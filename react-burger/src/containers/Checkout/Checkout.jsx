import React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

function Checkout() {
  return (
    <CheckoutSummary ingredients={{ cheese: 1 }} />
  );
}

export default Checkout;
