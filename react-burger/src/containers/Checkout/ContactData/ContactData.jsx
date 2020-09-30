import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactData() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    adress: { street: '', postalCoda: '' },
  });
  return (
    <Row className="justify-content-center">
      <Col xs={12} sm={10} md={8} lg={6}>
        <Form>
          <Form.Row>
            <Col xs={12}>
              <Form.Group controlId="name">
                <Form.Label>Complete name</Form.Label>
                <Form.Control type="text" placeholder="Your name" />
              </Form.Group>
            </Col>
            <Col xs={12}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="street">
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" placeholder="Street" />
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group controlId="postalCode">
                <Form.Label>Postal code</Form.Label>
                <Form.Control type="text" placeholder="Postal code" />
              </Form.Group>
            </Col>
          </Form.Row>
          <Button variant="primary" type="submit">
            ORDER
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default ContactData;
