import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

function Layout(props) {
  const { children } = props;

  return (
    <>
      <Toolbar />
      <Container fluid>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Layout;
