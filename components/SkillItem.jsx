import React from 'react'
import Image from 'next/image';

const SkillItem = ({ Img, Name }) => {
    return (
        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 mix-blend-multiply bg-gradient-to-t dark:bg-gradient-to-t from-slate-400 dark:border-4 dark:border-gray-300 '>
            <div className='grid grid-cols-2 gap-4 justify-center items-center z-20'>
                <div className='m-auto '>
                    <Image src={Img} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center dark:text-black'>
                    <h3 >{Name}</h3>
                </div>
            </div>
        </div>
    )
}

export default SkillItem