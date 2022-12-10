import React from 'react';
import Contact from './Contact';
import Hero from './Hero';
import Navbar from './Navbar';
import Projects from './Projects';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;