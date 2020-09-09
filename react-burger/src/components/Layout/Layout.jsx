import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Layout(props) {
  const { children } = props;

  return (
    <Container fluid>
      <Row>
        <div>Toolbar, SideDrawer and Backdrop</div>
        {children}
      </Row>
    </Container>
  );
}

export default Layout;
