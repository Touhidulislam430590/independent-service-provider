import React from 'react';
import meeting from '../../../images/brainstorm-meeting.jpg';

const TutorialGuru = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary'>Why TutorialGuru -</h2>
            <div className="row my-5">
                <div className="col-md-6">
                    <p>Tutorial-Guru always provide you the best service in the lowest price. Our special notes and extra care helps you to learn everythings quickly.</p>
                </div>
                <div className="col-md-6">
                    <img src={meeting} className="img-fluid" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default TutorialGuru;