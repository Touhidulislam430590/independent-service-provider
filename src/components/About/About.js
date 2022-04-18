import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center pt-5'>
            <Card className='w-50'>
            <Card.Header className='text-center'>About Me</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>Hello, I am a Proffessional frontend developer. I studies University of South Asia department of computer science and engineering. I am a hardworker and honest person. I live in Barisal.</p>
                    <footer className="blockquote-footer">
                        Touhidul Islam
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;