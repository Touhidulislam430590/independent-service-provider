import React from 'react';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import TutorialGuru from './TutorialGuru/TutorialGuru';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TutorialGuru></TutorialGuru>
            <Service></Service>
        </div>
    );
};

export default Home;