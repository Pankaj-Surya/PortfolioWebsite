import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/Contact.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.current, `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`)
        .then((result) => {
            // console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div id='contact' className='w-full lg:h-full dark:bg-gray-700'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5] dark:text-white '>Contact</p>
                <h2 className='py-4 dark:text-[#a6b595]'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full '>
                            <div>
                                <Image
                                    className='rounded-xl hover:scale-105 ease-in duration-300'
                                    src={ContactImg}
                                    alt='/'
                                />
                            </div>
                            <div>
                                <h2 className='py-2 dark:text-white'>Pankaj Suryavanshi</h2>
                                <p className='dark:text-gray-300'>Full Stack Web Developer</p>
                                <p className='py-4 dark:text-gray-100'>
                                    I am available for freelance or full-time positions. Contact
                                    me and let&apos;s talk.
                                </p>
                            </div>
                            <div>
                                <p className='uppercase pt-8 dark:text-gray-100'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <a
                                        href='https://www.linkedin.com/in/pankaj-suryavanshi-ba2635151/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-indigo-200 hover:scale-110 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                                            <FaLinkedinIn />
                                        </div>
                                    </a>
                                    <a
                                        href='https://github.com/Pankaj-Surya/'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-indigo-200 hover:scale-110 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                                            <FaGithub />
                                        </div>
                                    </a>

                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-indigo-200 hover:scale-110 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                                        <AiOutlineMail />
                                    </div>
                                    <Link href='/resume'>
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-indigo-200 hover:scale-110 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                                            <BsFillPersonLinesFill />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2 dark:text-white'>Name</label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-300'
                                            type='text'
                                            name="user_name"
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2 dark:text-white'>
                                            Phone Number
                                        </label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-300'
                                            type='text'
                                            name='phone'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 dark:text-white'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-300'
                                        type='email'
                                        name='user_email'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 dark:text-white'>Subject</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300 dark:bg-gray-300'
                                        type='text'
                                        name='subject'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2 dark:text-white'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 border-gray-300 dark:bg-gray-300'
                                        rows='10'
                                        name='message'
                                    ></textarea>
                                </div>
                                <button type="submit" value="Send" className='w-full bg-black p-4 text-gray-100 mt-4 dark:shadow'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-gray-300 hover:dark:bg-indigo-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-[#5651e5]'
                                size={30}
                            />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Contact;