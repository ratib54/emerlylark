import React from 'react';
import img from '../../Assets/hero-img.png'
import './Hero.css'
import Typewriter from "typewriter-effect";
import rings from "../../Assets/pattern-rings.svg"
const Hero = () => {
    return (
        <div className="hero relative">
            <img
                className="absolute -left-56 top-28"
                src={rings}
                alt=""
                width="530"
                height="129"
            />
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="lg:w-2/4" alt='' />
                <div>
                    <h1 className="text-2xl md:text-5xl font-bold my-5">Nice to meet you! I'm <Typewriter
                        options={{
                            strings: ['Farhan Aziz Mukto.', 'A Front End Developer.'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h1>
                    <p className="py-6 mb-8">Based in Chittagong Bangladesh, I'm a front-end developer passionate about building accessible web apps that users love.</p>
                    <a href='https://drive.google.com/uc?export=download&id=1Vqm-NUKD3Rl9eu0JJ5jceaJdJ9i6xwiP' className="custom-btn">DOWNLOAD RESUME</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;