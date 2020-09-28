import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
  const { match } = props;
  // console.log(match);

  return (
    <Navbar bg="light" expand="lg" className="mb-3 pb-0">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <NavLink to="/" exact className="nav-link" activeClassName="border-bottom border-primary">
            Blog
          </NavLink>
          <NavLink
            to={{ pathname: '/new-post', search: '?sort=true', hash: '#section1' }}
            className="nav-link"
            activeClassName="border-bottom border-primary"
          >
            New post
          </NavLink>
          {/* <Link to={{ pathname: `${match.url}/relative-path` }} className="nav-link">
            Relative path
          </Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default withRouter(Navigation);
