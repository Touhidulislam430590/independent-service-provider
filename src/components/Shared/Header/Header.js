import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    
    const handleSignOut = () => {
        signOut(auth)
      }
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
                            {
                                user? 
                                <>
                                    <Nav.Link as={Link} to="/home" onClick={handleSignOut}>Sign Out</Nav.Link>
                                    <Nav.Link>{user.email}</Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                </>
                            }
                            
                            
                            
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;