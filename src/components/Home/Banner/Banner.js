import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" style={{height: '500px'}} src={banner1} alt="First slide" />
                    <Carousel.Caption>
                        <h3 className='text-dark'>Learn Fast</h3>
                        <p className='text-dark'>Learn easily fast and hard with my best tricks</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img className="d-block w-100" style={{height: '500px'}} src={banner2} alt="First slide" />
                    <Carousel.Caption>
                        <h3 className='text-dark'>Earn Skill</h3>
                        <p className='text-dark'>Learn soft skill from my course</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;