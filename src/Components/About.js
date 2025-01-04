import React from "react";
import Lottie from "lottie-react";
import animation from "../Assets/18123-developer.json";
const About = () => {
  return (
    <section id="about" className="py-10 relative">
      <h1 className="text-4xl md:text-5xl font-bold mt-20 ">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <Lottie className="lg:w-2/3 md:mx-auto" animationData={animation} />
        <p className="text-xl">
          Emery Lark is a web developer passionate about crafting user-centric
          digital experiences. Skilled in front-end and back-end technologies,
          she combines technical expertise with design insight to build
          functional, visually striking websites. Proficient in JavaScript,
          Python, HTML/CSS, React, and Django, Emery values clean code,
          accessibility, and responsive design, ensuring high-quality results.
        </p>
      </div>
    </section>
  );
};

export default About;
