import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">TutorialGuru</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/service">Service</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="/signin">Sign In</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                            <Nav.Link href="/signout">Sign Out</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;