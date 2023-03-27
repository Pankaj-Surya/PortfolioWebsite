import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/AboutImg.jpg'

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 dark:bg-gray-800'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5] dark:text-white'>
                        About
                    </p>
                    <h2 className='py-4 dark:text-[#a6b595]'>Who I Am</h2>
                    <p className='py-2 text-gray-600 dark:text-gray-300'>
                        As a Junior Full Stack Web Developer, I am passionate about building dynamic and intuitive web applications that enhance the user experience. My experience includes working with programming languages such as HTML, CSS, JavaScript, and server-side technologies like Node.js. I have also worked with databases such as MySQL and MongoDB, and I am familiar with web frameworks like React js.
                    </p>
                    <p className='py-2 text-gray-600 dark:text-gray-300'>
                        In addition to my technical skills, I am committed to staying up-to-date with industry trends and learning new technologies. I enjoy working in a team environment and have strong problem-solving and communication skills.
                        My goal as a Junior Full Stack Web Developer is to continue to develop my skills and expertise while creating impactful software solutions. I am excited about the opportunity to work with other talented developers and designers to create innovative and user-focused web applications.
                    </p>
                    <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer dark:text-blue-400'>
                            Check out some of my latest projects.
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl w-[200vw]' alt='/' />
                </div>
            </div>
        </div>
    );
};

export default About;