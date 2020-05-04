import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Navbar bg="primary">
      <Navbar.Brand as={Link} to="/">
        Hew
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/control">
            Control
          </Nav.Link>
          <Nav.Link as={Link} to="/settings">
            Settings
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
