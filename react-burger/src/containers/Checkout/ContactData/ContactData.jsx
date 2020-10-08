import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from '../../../axios-orders';
import ContactForm from '../../../components/UI/ContactForm/ContactForm';

const propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.number),
  totalPrice: PropTypes.number.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const defaultProps = { ingredients: {} };

function ContactData(props) {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementConfig: {
        col: 12,
        label: 'Name',
        type: 'text',
        placeholder: 'Your name',
      },
      value: '',
    },
    email: {
      elementConfig: {
        col: 12,
        label: 'Email',
        type: 'email',
        placeholder: 'Your email',
      },
      value: '',
    },
    street: {
      elementConfig: {
        col: 4,
        label: 'Street',
        type: 'text',
        placeholder: 'Your street',
      },
      value: '',
    },
    number: {
      elementConfig: {
        col: 4,
        label: 'Number',
        type: 'text',
        placeholder: 'Your house number',
      },
      value: '',
    },
    country: {
      elementConfig: {
        col: 4,
        label: 'Country',
        type: 'text',
        placeholder: 'Your country',
      },
      value: '',
    },
  });
  const [loading, setLoading] = useState(false);
  const { ingredients, totalPrice, history } = props;

  const orderHandler = (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {};
    Object.entries(orderForm).forEach(([key, value]) => {
      formData[key] = value.value;
    });

    const order = {
      ingredients,
      totalPrice: totalPrice.toFixed(2),
      orderData: formData,
      deliveryMethod: 'Fastest',
    };

    axios
      .post('/orders.json', order)
      .then(() => {
        setLoading(false);
        history.replace('/');
      })
      .catch(() => {});
  };

  const inputChangeHandler = (event, key) => {
    setOrderForm({
      ...orderForm,
      [key]: { ...orderForm[key], value: event.target.value },
    });
  };

  return (
    <Row className="justify-content-center mb-3">
      <Col xs={12} sm={10} md={8} lg={6}>
        <ContactForm
          orderHandler={orderHandler}
          loading={loading}
          orderForm={orderForm}
          inputChangeHandler={inputChangeHandler}
        />
      </Col>
    </Row>
  );
}

ContactData.propTypes = propTypes;
ContactData.defaultProps = defaultProps;

export default withRouter(ContactData);
