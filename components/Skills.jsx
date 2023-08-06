import React from 'react';
import SkillItem from './SkillItem';
import HTML from '../public/static/images/assets/skills/html.png'
import HTMLDARK from '../public/static/images/assets/skills/htmldark.png'
import CSS from '../public/static/images/assets/skills/css.png'
import JAVASCRIPT from '../public/static/images/assets/skills/javascript.png'
import REACT from '../public/static/images/assets/skills/react.png'
import NODE from '../public/static/images/assets/skills/node.png'
import MONGODB from '../public/static/images/assets/skills/mongo.png'
import REDUX from '../public/static/images/assets/skills/reduxToolkit.png'
import FIREBASE from '../public/static/images/assets/skills/firebase.png'
import TAILWIND from '../public/static/images/assets/skills/tailwind.png'
import NEXT from '../public/static/images/assets/skills/nextjs.png'
import GITHUB from '../public/static/images/assets/skills/github.png'
import MYSQL from '../public/static/images/assets/skills/MySql.png'

const Skills = () => {
    return (
        <div id='skills' className='w-full lg:h-screen p-2 dark:bg-gray-700 z-10'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5] dark:text-white'>Skills</p>
                <h2 className='py-4 dark:text-[#a6b595]'>What I Can Do</h2>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 '>

                    <SkillItem Img={HTMLDARK} Name="HTML" />
                    <SkillItem Img={CSS} Name="CSS" />
                    <SkillItem Img={JAVASCRIPT} Name="JAVASCRIPT" />
                    <SkillItem Img={REACT} Name="REACT" />
                    <SkillItem Img={NODE} Name="NODE" />
                    <SkillItem Img={MONGODB} Name="MONGODB" />
                    <SkillItem Img={NEXT} Name="NEXT" />
                    <SkillItem Img={REDUX} Name="REDUX-TOOLKIT" />
                    <SkillItem Img={FIREBASE} Name="FIREBASE" />
                    <SkillItem Img={TAILWIND} Name="TAILWIND" />
                    <SkillItem Img={GITHUB} Name="GITHUB" />
                    <SkillItem Img={MYSQL} Name="MySQL" />

                </div>
            </div>
        </div>
    );
};

export default Skills;