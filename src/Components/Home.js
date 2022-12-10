import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Projects></Projects>
        </div>
    );
};

export default Home;