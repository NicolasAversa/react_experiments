import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import FormInput from './FormInput/FormInput';

const propTypes = {
  orderHandler: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function ContactForm(props) {
  const { orderHandler, loading } = props;

  return (
    <Form>
      <Form.Row>
        <FormInput col={12} label="Name" type="text" placeholder="Your name" />
        <FormInput col={12} label="Email" type="email" placeholder="Your email" />
        <FormInput col={6} label="Street" type="text" placeholder="Street" />
        <FormInput col={6} label="Postal code" type="text" placeholder="Postal code" />
      </Form.Row>
      <Button
        variant="primary"
        type="submit"
        onClick={orderHandler}
        className={loading ? 'd-none' : ''}
      >
        ORDER
      </Button>
      <Spinner animation="border" variant="primary" className={loading ? '' : 'd-none'} />
    </Form>
  );
}

ContactForm.propTypes = propTypes;

export default ContactForm;
