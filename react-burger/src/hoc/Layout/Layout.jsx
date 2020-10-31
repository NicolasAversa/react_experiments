import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const propTypes = {
  children: PropTypes.element.isRequired,
};

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

Layout.propTypes = propTypes;

export default Layout;
