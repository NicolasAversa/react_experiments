import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Order from './Order/Order';

const propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object),
};

const defaultProps = {
  orders: [],
};

function OrderList(props) {
  const { orders } = props;

  const orderList = orders.map((order) => (
    <Order key={order.id} ingredients={order.ingredients} totalPrice={order.totalPrice} />
  ));

  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={10} md={8} lg={6}>
        <ListGroup>{orderList}</ListGroup>
      </Col>
    </Row>
  );
}

OrderList.propTypes = propTypes;
OrderList.defaultProps = defaultProps;

export default OrderList;
