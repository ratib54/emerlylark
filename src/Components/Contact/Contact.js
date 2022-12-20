import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import '../Contact/Contact.css'

const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_omtw20j', 'template_szdqwbn', form.current, 'em4Mkgp4vhRuOsTMo')
            .then((result) => {
                e.target.reset()
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className='my-20 md:my-0 grid grid-cols-1 lg:grid-cols-2 gap-24 bg-[#242424] py-20 full-bleed'>
            <div className=''>
                <h1 className='text-4xl md:text-5xl  font-bold mb-5'>Contact</h1>
                <p className='text-xl'>I would love to hear about your project and how I could help. Please fill in the form, and I'll get back to you as soon as possible.</p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input placeholder='NAME' className='rounded-none bg-transparent  focus:outline-0 input input-ghost border-0 border-b-2 border-b-white w-full my-5' type="text" name="user_name" required />
                <input placeholder='EMAIL' className='rounded-none bg-transparent focus:outline-0 input input-ghost border-0 border-b-2 border-b-white w-full my-5' type="email" name="user_email" required />
                <textarea name='message' className="rounded-none textarea textarea-ghost bg-transparent focus:outline-0 border-0 border-b-2 border-b-white w-full my-5" placeholder="MESSAGE" required></textarea>
                <div className="flex justify-end">
                    <button className='custom-btn' value="Send" type="submit"> Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;