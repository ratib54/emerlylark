import React from "react"
import img from "../../Assets/p-pro.png"
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
                strings: ["Emery Lark", "A Front End Developer."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="py-6 mb-8">
            Based in USA, I'm a MERN stack developer
            passionate about building accessible web apps that users love.
          </p>
          <a
            href="#"
            className="custom-btn"
          >
            DOWNLOAD RESUME
          </a>
        </div>
        <img src={img} alt="Emery Clark " className="order-first lg:order-last rounded-full " />
      </div>
    </div>
  );
};

export default Hero;
