import React, { useState } from 'react'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
import { projectData } from '../data'
import Project from './project';
import { motion } from 'framer-motion';

export default function Projects({ ref, inView }) {
    const [portprojects, setPortProjects] = useState(projectData);
    const [currentProject, setCurrentProject] = useState(portprojects[0]);

    const projectChangeHandler = async (direction) => {
        let currentIndex = portprojects.findIndex(portProject => portProject.id === currentProject.id)
        if(direction === 'next-project') {
            await setCurrentProject(portprojects[(currentIndex + 1) % portprojects.length])
        }
        if(direction === 'prev-project') {
            if((currentIndex -1) % portprojects.length === -1) {
                await setCurrentProject(portprojects[portprojects.length - 1])
                return
            }
            await setCurrentProject(portprojects[(currentIndex - 1) % portprojects.length])
        }
    } 
    
  return (
    <motion.div 
      ref={ref}
      layout
      style={inView ? {opacity: 1} : {position: "sticky", top: '10%', zIndex: 3}} 
      className={"h-[calc(100vh-8rem)] overflow-y-scroll bg-white text-black w-[90%] m-auto mb-20 p-2 rounded-lg"}
    >
        <h2 className={"font-monoton text-center text-3xl p-4"}>Projects</h2>
        <Project currentProject={currentProject} />
        <div className={"flex justify-between"}>
            <button className='flex' onClick={() => projectChangeHandler('prev-project')}><TiArrowLeftThick size={28} /> prev project</button>
            <button className='flex flex-row-reverse' onClick={() => projectChangeHandler('next-project')}><TiArrowRightThick size={28} /> next project</button>
        </div>
    </motion.div>
  )
}
