import React from 'react';
import FeatureProducts from '../../Components/Home/FeatureProducts';
import HeroSection from '../../Components/Home/HeroSection';
import Services from '../../Components/Home/Services';
import Trusted from '../../Components/Home/Trusted';

const Home = () => {
    const data = {
        name: "POPULOUS SHOP"
    }
    return (
        <>
            <HeroSection data={data}></HeroSection>
            <FeatureProducts></FeatureProducts>
            <Services></Services>
            <Trusted></Trusted>
        </>
    );
};

export default Home;