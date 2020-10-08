import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const propTypes = {
  elementConfig: PropTypes.exact({
    col: PropTypes.number,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  onChange: PropTypes.func,
  value: PropTypes.string,
};

const defaultProps = {
  elementConfig: {
    col: 12,
    label: 'Your label here',
    type: 'text',
    placeholder: 'Your placeholder here',
  },
  onChange: () => {},
  value: '',
};

function FormInput(props) {
  const { elementConfig, value, onChange } = props;

  return (
    <Col xs={elementConfig.col}>
      <Form.Group controlId={elementConfig.label} value={value}>
        <Form.Label>{elementConfig.label}</Form.Label>
        <Form.Control
          type={elementConfig.type}
          placeholder={elementConfig.placeholder}
          onChange={onChange}
        />
      </Form.Group>
    </Col>
  );
}

FormInput.propTypes = propTypes;
FormInput.defaultProps = defaultProps;

export default FormInput;
