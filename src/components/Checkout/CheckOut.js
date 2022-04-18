import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <div className='container'>
            <h2>Ready for checkout</h2>
            <Form className="w-50">
                <Form.Group className="mb-3" controlId="forUser">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter User Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="forEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="forAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Your Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="forPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>
                
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
};

export default CheckOut;