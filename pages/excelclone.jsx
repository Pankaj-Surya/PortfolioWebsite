import Image from 'next/image';
import React from 'react';
import ExcelClone from '../public/static/images/assets/projects/excelCloneImg.jpg'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const excelClone = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[50vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
                <Image
                    className='absolute z-1'
                    fill
                    src={ExcelClone}
                    alt='/'
                />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Excel Clone</h2>
                    <h3>HTML / CSS / Javascript </h3>
                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        This app was built using HTML, CSS and Javascript hosted on Vercel.
                        Implemented the features such as 2d grid, rows ,columns,sheets, formula and address bar were build using vanilla js and css.
                        Use can do operation like changing font size ,font type ,alignments and other styling for text
                        properties.Formula is implemented using DFS algorithm and evalution of that formula is done via infix stack evaluation.
                    </p>
                    <a
                        href='https://github.com/Pankaj-Surya/excel-clone'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4 mr-8'>Code</button>
                    </a>
                    <a
                        href='https://excel-clone-flame.vercel.app/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='px-8 py-2 mt-4'>Demo</button>
                    </a>

                    <div className='mt-8'>
                        <Link href='/#projects'>
                            <p className='underline cursor-pointer'>Back</p>
                        </Link>
                    </div>

                </div>
                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='ml-2 pr-1' /> HTML
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='ml-2 pr-1' /> CSS
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='ml-2 pr-1' /> Javascript
                            </p>
                            <p className='text-gray-600 py-2 flex items-center'>
                                <RiRadioButtonFill className='ml-2 pr-1' /> Local Storage
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default excelClone;