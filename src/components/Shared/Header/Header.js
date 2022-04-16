import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">TutorialGuru</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/home#service">Service</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            <Nav.Link as={Link} to="/signout">Sign Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;