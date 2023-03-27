import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div id='home' className='w-full h-screen text-center dark:bg-gray-700'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-white'>
                        LET&#39;S BUILD SOMETHING TOGETHER
                    </p>
                    <h1 className='py-4 text-gray-700 dark:text-white'>
                   <span className='text-[#5651e5] dark:text-[#a6b595]'> Pankaj</span>
                    </h1>
                    <h1 className='py-2 text-gray-700 dark:text-white'>A Full-Stack Web Developer</h1>
                    <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto dark:text-gray-200'>
                        I’m focused on building responsive web applications
                        integrating back-end technologies.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-indigo-200 hover:scale-110 ease-in duration-300
                            dark:bg-white hover:dark:bg-indigo-200'>
                                <FaGithub />
                            </div>
                        </a>
                        <Link href='/#contact'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-indigo-200 hover:scale-110 ease-in duration-300
                            dark:bg-white hover:dark:bg-indigo-200'>
                                <AiOutlineMail />
                            </div>
                        </Link>
                        <Link href='/resume'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-indigo-200 hover:scale-110 ease-in duration-300
                            dark:bg-white hover:dark:bg-indigo-200'>
                                <BsFillPersonLinesFill />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;