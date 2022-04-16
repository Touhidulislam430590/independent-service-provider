import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import google from '../../../images/google-logo.png';
import github from '../../../images/github-logo.png';

const Login = () => {
    return (
        <div className='container'>
            <h2 className='mt-4 mb-4'>Login</h2>

            <Form className="w-50">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Sign In
                </Button>
            </Form>
            <p>New User? <Link to='/register'>Registration Here</Link> </p>

            <div className="d-flex ">
                <div className='make-underline'></div>
                <p className='px-3'>or</p>
                <div className='make-underline'></div>
            </div>

            <Button className='btn btn-primary d-block my-3 '>
                <img src={google} height="24px" alt="" className='me-2' />
                Sign In with Google
            </Button>

            <Button className='btn btn-info  d-block '>
                <img src={github} height="24px" alt="" className='me-2' />
                Sign In with Github
            </Button>
        </div>
    );
};

export default Login;