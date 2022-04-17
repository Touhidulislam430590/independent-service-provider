import React from 'react';
import { ListGroup } from 'react-bootstrap';
import payment from '../../../images/payment-method.png';

const Footer = () => {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className="bg-dark mb-0 mt-5">
            <div className="container row" variant="light">
                <div className="col-6">
                    <h2 className='mt-5 text-white'>TutorialGuru</h2>
                    <p className='text-white'> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    <p className='text-white'> Official: web@tutorial-guru.com</p>
                    <p className='text-white'>Helpline : 017XXXXXXXX, 018XXXXXXXX , 019XXXXXXXX</p>
                    <p className='text-white'>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                </div>
                <div className="col-3">
                    <ListGroup> 
                        <ListGroup.Item>About</ListGroup.Item>
                        <ListGroup.Item>Blogs</ListGroup.Item>
                        
                    </ListGroup>
                </div>
                <div className="col-3 d-flex align-items-center">
                    <img src={payment} alt="" height={'150px'} />
                </div>
            </div>
            <div className="text-center border-top py-3">
                <p className='m-0 text-white'> Copyright &copy; {year} tutorial-guru.com</p>
            </div>
        </div>
    );
};

export default Footer;