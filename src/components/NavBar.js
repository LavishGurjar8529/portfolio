// src/components/NavBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="sticky-navbar">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/gallery">Photo Gallery</Nav.Link>
          <Nav.Link href="/education">Education</Nav.Link>
          <Nav.Link href="/social-accounts">Social Accounts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
