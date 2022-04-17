import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div>
                <h1 className="notFound-heading">404</h1>
                <p className="notFound-paragraph">Page not found</p>
            </div>
        </div>
    );
};

export default NotFound;