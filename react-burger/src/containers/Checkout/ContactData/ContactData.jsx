import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from '../../../axios-orders';
import ContactForm from '../../../components/ContactForm/ContactForm';

const propTypes = {
  ingredients: PropTypes.objectOf(PropTypes.object),
  totalPrice: PropTypes.number.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const defaultProps = { ingredients: {} };

function ContactData(props) {
  // const [contactData, setContactData] = useState({
  //   name: '',
  //   email: '',
  //   adress: { street: '', postalCoda: '' },
  // });
  const [loading, setLoading] = useState(false);
  const { ingredients, totalPrice, history } = props;

  const orderHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    const order = {
      ingredients,
      totalPrice: totalPrice.toFixed(2),
      customer: {
        name: 'Juanma Arancibia',
        adress: { street: '33', number: '825 1/2', country: 'Argentina' },
        email: 'juanma@hotmail.com',
      },
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

  return (
    <Row className="justify-content-center mb-3">
      <Col xs={12} sm={10} md={8} lg={6}>
        <ContactForm orderHandler={orderHandler} loading={loading} />
      </Col>
    </Row>
  );
}

ContactData.propTypes = propTypes;
ContactData.defaultProps = defaultProps;

export default withRouter(ContactData);
