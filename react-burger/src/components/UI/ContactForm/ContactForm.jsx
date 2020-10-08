import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import FormInput from './FormInput/FormInput';

const propTypes = {
  orderHandler: PropTypes.func,
  loading: PropTypes.bool,
  orderForm: PropTypes.objectOf(PropTypes.object).isRequired,
  inputChangeHandler: PropTypes.func,
};

const defaultProps = {
  orderHandler: () => {},
  loading: false,
  inputChangeHandler: () => {},
};

function ContactForm(props) {
  const {
    orderHandler, loading, orderForm, inputChangeHandler,
  } = props;

  const formElementsArray = Object.entries(orderForm).map(([key, value]) => ({
    id: key,
    elementConfig: value.elementConfig,
    value: value.value,
  }));
  const formElements = formElementsArray.map((formElement) => (
    <FormInput
      key={formElement.id}
      elementConfig={formElement.elementConfig}
      onChange={(event) => inputChangeHandler(event, formElement.id)}
      value={formElement.value}
    />
  ));

  return (
    <Form onSubmit={orderHandler}>
      <Form.Row>{formElements}</Form.Row>
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
ContactForm.defaultProps = defaultProps;

export default ContactForm;
