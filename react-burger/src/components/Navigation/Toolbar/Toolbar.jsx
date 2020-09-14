import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import burgerLogo from '../../../assets/images/logo.png';
import styles from './Toolbar.module.css';

function Toolbar() {
  return (
    <Navbar className={styles.toolbarBackground} expand="md" fixed="top">
      <Navbar.Brand href="#home" className="text-white">
        <img
          src={burgerLogo}
          height="30"
          className="d-inline-block align-top"
          alt="Burger Builder logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#link" className="text-white">
            Link
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Toolbar;
