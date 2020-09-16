import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import burgerLogo from '../../../assets/images/logo.png';
import styles from './Toolbar.module.css';

function Toolbar() {
  return (
    <Navbar className={`${styles.toolbarBackground} pb-0`} expand="md" fixed="top">
      <Navbar.Brand href="#home" className="text-white pt-0 pb-2">
        <img
          src={burgerLogo}
          height="30"
          className="d-inline-block align-top"
          alt="Burger Builder logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#" className={`${styles.navLinkActive} text-white`}>
            Burger Builder
          </Nav.Link>
          <Nav.Link href="#" className="text-white">
            Checkout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Toolbar;
