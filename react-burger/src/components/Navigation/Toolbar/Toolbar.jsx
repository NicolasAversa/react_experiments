import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import burgerLogo from '../../../assets/images/logo.png';
import styles from './Toolbar.module.css';

function Toolbar() {
  return (
    <Navbar className={`${styles.toolbarBackground} pb-0`} expand="md" fixed="top">
      <Link to="/" className="navbar-brand text-white pt-0 pb-2">
        <img
          src={burgerLogo}
          height="30"
          className="d-inline-block align-top"
          alt="Burger Builder logo"
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink
            to="/burger-builder"
            activeClassName={styles.navLinkActive}
            className="nav-link text-white"
          >
            Burger Builder
          </NavLink>
          <NavLink
            to="/my-orders"
            activeClassName={styles.navLinkActive}
            className="nav-link text-white"
          >
            My Orders
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Toolbar;
