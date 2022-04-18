import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import payment from '../../../images/payment-method.png';

const Footer = () => {
    // make footer copyright year dynamicly
    const d = new Date();
    let year = d.getFullYear();

    return (
        <div className="bg-dark mb-0 mt-5">
            <div className="container row" variant="light">
                <div className="col-12 col-lg-6">
                    {/* office information */}
                    <h2 className='mt-5 text-white'>TutorialGuru</h2>
                    <p className='text-white'> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    <p className='text-white'> Official: web@tutorial-guru.com</p>
                    <p className='text-white'>Helpline : 017XXXXXXXX, 018XXXXXXXX , 019XXXXXXXX</p>
                    <p className='text-white'>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</p>
                </div>
                <div className="col-12 col-lg-3 py-4">
                    {/* some demo short link  */}
                    <ListGroup> 
                        <ListGroup.Item> <Link to='/about' className='text-decoration-none'>About</Link> </ListGroup.Item>
                        <ListGroup.Item><Link to='/blog' className='text-decoration-none'>Blogs</Link></ListGroup.Item>
                        
                    </ListGroup>
                </div>
                <div className="col-12 col-lg-3 py-4 d-flex align-items-center">
                    {/* payment method list */}
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