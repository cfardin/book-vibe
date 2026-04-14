import React from 'react';
import HeroBanner from '../../components/Hero/HeroBanner';
import AllBooks from './AllBooks';

const HomePage = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <AllBooks></AllBooks>
        </div>
    );
};

export default HomePage; 