import React from 'react';
import img1 from '../Assets/Untitled.png'
import img2 from '../Assets/thumbnail_2.png'
import img3 from '../Assets/thumbnail_3.png'
import { Link } from 'react-router-dom';


const Projects = () => {
    return (
        <div>
            <div className="divider my-20"></div>
            <h1 className='text-4xl md:text-5xl font-bold my-20'>Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                <div className="group lg:relative block lg:overflow-hidden rounded-md transition-all duration-500">
                    <div className="transition-all duration-500 lg:group-hover:scale-105 lg:group-hover:opacity-20 tobii-zoom" title="">
                        <img src={img1} alt='' />
                    </div>
                    <h1 className='font-semibold text-xl my-1 text-center'>Mobile Reselling Platform</h1>
                    <div className="lg:absolute lg:group-hover:inset-0 right-2 left-2 p-4 rounded shadow flex justify-evenly items-center">
                        <a target='_blank' rel="noreferrer" href="https://mobile-resell-wizards.web.app/" className="custom-btn">Website</a>
                        <Link to="/projects/1" className="custom-btn">View Details</Link>
                        <a target='_blank' rel="noreferrer" href="https://github.com/FarhanZizz/mobile-resell-wizards-client" className="custom-btn">Code</a>
                    </div>
                </div>
                <div className="group lg:relative block lg:overflow-hidden rounded-md transition-all duration-500">
                    <div className="transition-all duration-500 lg:group-hover:scale-105 lg:group-hover:opacity-20 tobii-zoom" title="">
                        <img src={img3} alt='' />
                    </div>
                    <h1 className='font-semibold text-xl my-1 text-center'>Photography Related Services</h1>
                    <div className="lg:absolute lg:group-hover:inset-0 right-2 left-2 p-4 rounded shadow flex justify-around items-center">
                        <a target='_blank' rel="noreferrer" href="https://lens-knight.web.app/" className="custom-btn">Website</a>
                        <Link to="/projects/3" className="custom-btn">View Details</Link>
                        <a target='_blank' rel="noreferrer" href="https://github.com/FarhanZizz/lens-knight-client" className="custom-btn">Code</a>
                    </div>
                </div>
                <div className="group lg:relative block lg:overflow-hidden rounded-md transition-all duration-500">
                    <div className="transition-all duration-500 lg:group-hover:scale-105 lg:group-hover:opacity-20 tobii-zoom" title="">
                        <img src={img2} alt='' />
                    </div>
                    <h1 className='font-semibold text-xl my-1 text-center'>Technology Education Website</h1>
                    <div className="lg:absolute lg:group-hover:inset-0 right-2 left-2 p-4 rounded shadow flex justify-around items-center">
                        <a target='_blank' rel="noreferrer" href="https://tech-ed-6d513.web.app/" className="custom-btn">Website</a>
                        <Link to="/projects/2" className="custom-btn">View Details</Link>
                        <a target='_blank' rel="noreferrer" href="https://github.com/FarhanZizz/tech-ed" className="custom-btn">Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;