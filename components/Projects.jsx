import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem'
import YouTubeClone from "../public/assets/projects/YouTubeClone.png"
import IMDbClone from "../public/assets/projects/IMDbClone.png"
import AirBnbClone from "../public/assets/projects/AirBnbClone.png"
import TodoApp from "../public/assets/projects/TodoApp.png"
import FileManager from "../public/assets/projects/FileManager.png"

const Projects = () => {
   
    let projects = [
        {
            title: 'File Manager',
            backgroundImg: "/../public/assets/projects/FileManager.png",
            projectUrl: '/filemanager',
            tech: 'Node'
        },
        {
            title: 'HackerRank Automation',
            backgroundImg: "/../public/assets/projects/YouTubeClone.png",
            projectUrl: '/youtubeclone',
            tech: 'MERN'
        },
        {
            title: 'YouTube Clone',
            backgroundImg: "/../public/assets/projects/YouTubeClone.png",
            projectUrl: '/youtubeclone',
            tech: 'MERN'
        },
        {
            title: 'Excel Clone',
            backgroundImg: "/../public/assets/projects/excelClone.jpg",
            projectUrl: '/excelclone',
            tech: 'DOM'
        },
        {
            title: 'IMDb Clone',
            backgroundImg: "/../public/assets/projects/IMDbClone.png",
            projectUrl: '/imdbclone',
            tech: 'React'
        },
        {
            title: 'Linkedin Clone',
            backgroundImg: "/../public/assets/projects/linkedinClone.jpg",
            projectUrl: '/linkedinClone',
            tech: 'React'
        },    
        {
            title: 'YouTube Clone',
            backgroundImg: "/../public/assets/projects/YouTubeClone.png",
            projectUrl: '/youtubeclone',
            tech: 'MERN'
        },
      
      
    ]

    const [items, setItems] = useState(projects);

    const filterItem = (currItem) => {
        const updatedItems = projects.filter((currElem) => {
            return currElem.tech === currItem;
        });
        setItems(updatedItems);
        if (currItem === 'ALL') {
            setItems(projects)
        }
        console.log("items => ",items)
    }

    useEffect(()=>{

    },[items])

    return (
        <div id='projects' className='w-full dark:bg-gray-800 py-10'>
          
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5] dark:text-white'>Projects</p>
                <h2 className='py-4 dark:text-[#a6b595]'>What I&apos;ve Built</h2>

                <nav className="flex justify-center space-x-6 px-1 border border-black max-w-fit m-auto mb-4 rounded-3xl dark:bg-gray-500">
                    <a onClick={() => filterItem("ALL")} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-3xl hover:bg-gray-300 hover:text-slate-900">ALL</a>
                    <a onClick={() => filterItem('Node')} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-2xl hover:bg-gray-300 hover:text-slate-900 ">NODE</a>
                    <a onClick={() => filterItem("Automatiom")} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-2xl hover:bg-gray-300 hover:text-slate-900">Automatiom</a>
                    <a onClick={() => filterItem("DOM")} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-2xl hover:bg-gray-300 hover:text-slate-900">DOM</a>
                    <a onClick={() => filterItem("React")} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-2xl hover:bg-gray-300 hover:text-slate-900">REACT</a>
                    <a onClick={() => filterItem("Automatiom")} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-2xl hover:bg-gray-300 hover:text-slate-900">Backend</a>
                    <a onClick={() => filterItem("MERN")} className="font-me px-2 py-2 cursor-pointer text-slate-700 rounded-3xl hover:bg-gray-300 hover:text-slate-900">MERN</a>
                </nav>
                <div className='grid md:grid-cols-3 gap-8'>

                    {
            
                        items.map((item, idx) => (
                             
                            <ProjectItem
                                key={idx}
                                title={item.title}
                                backgroundImg={item.backgroundImg}
                                projectUrl={item.projectUrl}
                                tech={item.tech}
                                />

                                                  ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;