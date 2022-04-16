import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../../images/google-logo.png';
import github from '../../../images/github-logo.png';
import './Register.css';

const Register = () => {
    return (
        <div className='container'>
            <h2 className='my-4'>Register</h2>

            <Form className='w-50 '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p>Alredy have an account? <Link to="/signin">Log In Here</Link> </p>
            </Form>
            
            <div className="d-flex ">
                <div className='make-underline'></div>
                <p className='px-3'>or</p>
                <div className='make-underline'></div>
            </div>

            <Button className='btn btn-primary d-block my-3 '>
                <img src={google} height="24px" alt="" className='me-2' />
                Sign Up with Google
            </Button>

            <Button className='btn btn-info  d-block '>
                <img src={github} height="24px" alt="" className='me-2' />
                Sign Up with Github
            </Button>
        </div>
    );
};

export default Register;