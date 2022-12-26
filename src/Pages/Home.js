import React from 'react';
import About from '../Components/About';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero/Hero';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;