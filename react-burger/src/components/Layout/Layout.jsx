import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Toolbar from '../Navigation/Toolbar/Toolbar';

function Layout(props) {
  const { children } = props;

  return (
    <>
      <Toolbar />
      <Container fluid>
        <Row>
          {children}
        </Row>
      </Container>
    </>
  );
}

export default Layout;
