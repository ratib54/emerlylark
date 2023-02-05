import React from "react";
import img from "../../Assets/DP.png";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import rings from "../../Assets/pattern-rings.svg";
const Hero = () => {
  return (
    <div className="relative">
      <img
        className="absolute -left-56 top-28 -z-50"
        src={rings}
        alt=""
        width="530"
        height="129"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="">
          <h1 className="text-2xl font-extrabold md:text-5xl my-5">
            Nice to meet you! I'm
            <Typewriter
              options={{
                strings: ["Farhan Aziz Mukto.", "A Front End Developer."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-6 mb-8">
            Based in Chittagong Bangladesh, I'm a MERN stack developer
            passionate about building accessible web apps that users love.
          </p>
          <a
            href="https://drive.google.com/uc?export=download&id=1Vqm-NUKD3Rl9eu0JJ5jceaJdJ9i6xwiP"
            className="custom-btn"
          >
            DOWNLOAD RESUME
          </a>
        </div>
        <img src={img} alt="Mukto" className="order-first lg:order-last" />
      </div>
    </div>
  );
};

export default Hero;
