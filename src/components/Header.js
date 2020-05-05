import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
    <Navbar bg="primary">
      <Navbar.Brand as={Link} to="/">
        <FontAwesomeIcon icon="lightbulb" /> Hew
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/control">
            <FontAwesomeIcon icon="sliders-h" /> Control
          </Nav.Link>
          <Nav.Link as={Link} to="/devices">
            <FontAwesomeIcon icon="server" /> Devices
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
