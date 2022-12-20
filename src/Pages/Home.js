import React from 'react';
import About from '../Components/About';
import Contact from '../Components/Contact/Contact';
import Hero from '../Components/Hero/Hero';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;