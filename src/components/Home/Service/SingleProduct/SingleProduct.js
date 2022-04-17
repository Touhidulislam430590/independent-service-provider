import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const {title, price, img, description} = props.product;
    return (
        <div className='col-4 mb-3'>
            <Card style={{ width: '18rem', height: '500px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Card.Link as={Link} to="#">Card Link</Card.Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default SingleProduct;