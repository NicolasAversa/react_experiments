import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import OrderList from '../../components/OrderList/OrderList';
import ErrorHandler from '../../components/UI/ErrorHandler/ErrorHandler';
import axios from '../../axios-orders';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/orders.json')
      .then((response) => {
        const fetchedOrders = Object.entries(response.data).map(([key, value]) => ({ ...value, id: key }));
        setLoading(false);
        setOrders(fetchedOrders);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <OrderList orders={orders} />
      <ErrorHandler axios={axios} />
    </>
  );
}

export default Orders;
