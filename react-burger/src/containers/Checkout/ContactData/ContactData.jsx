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
        errorMessage: 'This field is mandatory',
      },
      value: '',
      rules: {
        required: true,
      },
      valid: false,
      dirty: false,
    },
    email: {
      elementConfig: {
        col: 12,
        label: 'Email',
        type: 'email',
        placeholder: 'Your email',
        errorMessage: 'This field is mandatory',
      },
      value: '',
      rules: {
        required: true,
      },
      valid: false,
      dirty: false,
    },
    street: {
      elementConfig: {
        col: 4,
        label: 'Street',
        type: 'text',
        placeholder: 'Your street',
        errorMessage: 'Invalid street number',
      },
      value: '',
      rules: {
        required: true,
        minLength: 2,
        maxLength: 3,
      },
      valid: false,
      dirty: false,
    },
    number: {
      elementConfig: {
        col: 4,
        label: 'Number',
        type: 'text',
        placeholder: 'Your house number',
        errorMessage: 'Invalid house number',
      },
      value: '',
      rules: {
        required: true,
        maxLength: 4,
      },
      valid: false,
      dirty: false,
    },
    country: {
      elementConfig: {
        col: 4,
        label: 'Country',
        type: 'text',
        placeholder: 'Your country',
        errorMessage: 'This field is mandatory',
      },
      value: '',
      rules: {
        required: true,
      },
      valid: false,
      dirty: false,
    },
  });
  const [loading, setLoading] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
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

  const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    return isValid;
  };

  const inputChangeHandler = (event, key) => {
    const newOrderForm = {
      ...orderForm,
      [key]: {
        ...orderForm[key],
        value: event.target.value,
        valid: checkValidity(event.target.value, orderForm[key].rules),
        dirty: true,
      },
    };
    setOrderForm(newOrderForm);

    // Global form validation
    let newFormIsValid = true;
    Object.keys(newOrderForm).forEach((fieldIdentifier) => {
      newFormIsValid = newOrderForm[fieldIdentifier].valid && newFormIsValid;
    });
    setFormIsValid(newFormIsValid);
  };

  return (
    <Row className="justify-content-center mb-3">
      <Col xs={12} sm={10} md={8} lg={6}>
        <ContactForm
          orderHandler={orderHandler}
          loading={loading}
          orderForm={orderForm}
          inputChangeHandler={inputChangeHandler}
          formIsValid={formIsValid}
        />
      </Col>
    </Row>
  );
}

ContactData.propTypes = propTypes;
ContactData.defaultProps = defaultProps;

export default withRouter(ContactData);
