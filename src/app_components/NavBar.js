import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import Coffee_Bean_Logo from '../images/Coffee_Bean_Logo.png'

const NavBar = () => {
  return (
    <Navbar expand="lg" fixed="top">
        <Container>
            <Navbar.Brand href="#home">
                <img src={Coffee_Bean_Logo} alt="logo" height="45"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto text-right">
                <Nav.Link href="#home">
                    <i className="fas fa-home" />Home
                    </Nav.Link>
                <Nav.Link href="#link">
                    <i className="fas fa-sign-in-alt"/>Sign In
                    </Nav.Link>
                <Nav.Link href="#link">
                    <i className="fas fa-user-plus"/>Sign Up
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
};

export default NavBar