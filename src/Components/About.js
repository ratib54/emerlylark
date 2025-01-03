import React from 'react';
import Lottie from "lottie-react";
import animation from "../Assets/18123-developer.json";
const About = () => {

    return (
        <section id='about' className='py-10 relative'>
            <h1 className='text-4xl md:text-5xl font-bold mt-20 '>About Me</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                <Lottie className='lg:w-2/3 md:mx-auto' animationData={animation} />
                <p className='text-xl'>Emery Lark is a passionate and innovative web developer who specializes in creating seamless, user-centric digital experiences. With a deep understanding of front-end and back-end technologies, Emery combines technical expertise with a keen eye for design to craft websites that are both functional and visually striking.
                    Her journey into web development began with a love for solving complex problems and a fascination with how technology shapes our daily lives. Over the years, she has honed her skills in languages like JavaScript, Python, and HTML/CSS, as well as frameworks such as React and Django. Emery is also an advocate for clean code, accessibility, and responsive design, ensuring her projects meet the highest standards.
                </p>
            </div>
        </section>
    );
};

export default About;