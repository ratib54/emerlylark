import React from 'react';
import fullPage from '../Assets/fullpage.png'
import myProducts from '../Assets/myproducts.png';
import addProduct from '../Assets/addProduct.png';

const Project1 = () => {
    return (
        <div className='lg:flex lg:flex-row-reverse justify-center items-center'>

            <div className="overflow-hidden mx-auto max-w-2xl">
                <div className="my-5 lg:pt-24 lg:px-24">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={addProduct} />
                            </div>

                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={myProducts} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src={fullPage} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className='text-3xl md:text-4xl font-bold my-5'>Mobile Resell Wizards</h1>
                <p className='text-2xl'>A platform for reselling used mobile phones. This website has dashbaord functions for three types of account Admin, buyer and sellers.
                </p>
                <p className='text-lg my-5'> <span className='text-[#4ce19e]'>Technologies Used :</span> React, React Router, Firebase, Vercel, JWT, React Query, Axios, MongoDB CRUD, Tailwind CSS, Daisy UI, Stripe, Generic Modal.
                </p>
                <div className="flex justify-items-start">
                    <a target='_blank' rel="noreferrer" href="https://mobile-resell-wizards.web.app/" className="custom-btn mr-5">View Live Website</a>
                    <a target='_blank' rel="noreferrer" href="https://github.com/FarhanZizz/mobile-resell-wizards-client" className="custom-btn">View Source Code</a>
                </div>
            </div>
        </div>
    );
};

export default Project1;