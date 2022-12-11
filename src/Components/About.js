import React from 'react';
import Lottie from "lottie-react";
import animation from "../Assets/18123-developer.json";
const About = () => {

    return (
        <div className=''>
            <h1 className='text-4xl md:text-5xl font-bold mt-20'>About Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                <Lottie className='lg:w-2/3 md:mx-auto' animationData={animation} />
                <p className='text-xl'>Hi I'm Farhan Aziz Mukto. I'm 18 years old. I study General Science Higher Secondary at Probortok College Chittagong. I'm a MERN stack developer. I am interested in IT and everything in its orbit. I recently began to be fascinated by web programming, e.g. developing apps and building websites and I'm Learning in this field for more than 2 years.</p>
            </div>
        </div>
    );
};

export default About;