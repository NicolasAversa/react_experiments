import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navigation from '../../components/Navigation/Navigation';

function Layout(props) {
  const { children } = props;

  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Col xs={12}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
