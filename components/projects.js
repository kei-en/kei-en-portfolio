import React, { useState } from 'react';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';
import { projectData } from '../data';
import Project from './project';
import { motion } from 'framer-motion';

export default function Projects({ inView }) {
  const [portprojects, setPortProjects] = useState(projectData);
  const [currentProject, setCurrentProject] = useState(portprojects[0]);

  const projectChangeHandler = (direction) => {
    let currentIndex = portprojects.findIndex(
      (portProject) => portProject.id === currentProject.id
    );
    if (direction === 'next-project') {
      setCurrentProject(portprojects[(currentIndex + 1) % portprojects.length]);
    }
    if (direction === 'prev-project') {
      if ((currentIndex - 1) % portprojects.length === -1) {
        setCurrentProject(portprojects[portprojects.length - 1]);
        return;
      }
      setCurrentProject(portprojects[(currentIndex - 1) % portprojects.length]);
    }
  };

  return (
    <motion.div
      layout
      style={
        inView ? { opacity: 1 } : { position: 'sticky', top: '10%', zIndex: 3 }
      }
      className={
        'h-[calc(100vh-7rem)] overflow-hidden bg-white text-black w-[90%] m-auto mb-20 p-2 rounded-lg aspect-video'
      }
    >
      <h2 className={'font-monoton text-center text-3xl p-4'}>Projects</h2>
      {/* <div className="flex flex-col"> */}
      <Project currentProject={currentProject} />
      <div className={'flex justify-between p-4'}>
        <button
          className="flex"
          onClick={() => projectChangeHandler('prev-project')}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="28.000000pt"
            height="40.000000pt"
            viewBox="0 0 181 200"
            preserveAspectRatio="xMidYMid meet"
            className="fill-black hover:fill-purple"
          >
            <g transform="translate(0,200) scale(0.1,-0.1)" stroke="none">
              <path
                d="M947 1880 c-51 -56 -124 -152 -273 -359 -148 -207 -283 -329 -503
                        -457 -91 -53 -117 -74 -93 -74 15 0 193 -110 269 -166 117 -86 205 -176 299
                        -305 202 -277 263 -356 307 -404 l46 -50 1 353 0 352 375 0 c233 0 375 4 375
                        10 0 5 -48 108 -107 230 l-106 220 -268 0 -269 0 -2 352 -3 352 -48 -54z"
              />
            </g>
          </svg>
        </button>
        <button
          className="flex flex-row-reverse"
          onClick={() => projectChangeHandler('next-project')}
        >
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="28.000000pt"
            height="40.000000pt"
            viewBox="0 0 181 200"
            preserveAspectRatio="xMidYMid meet"
            className="fill-black hover:fill-purple rotate-180"
          >
            <g transform="translate(0,200) scale(0.1,-0.1)" stroke="none">
              <path
                d="M947 1880 c-51 -56 -124 -152 -273 -359 -148 -207 -283 -329 -503
                        -457 -91 -53 -117 -74 -93 -74 15 0 193 -110 269 -166 117 -86 205 -176 299
                        -305 202 -277 263 -356 307 -404 l46 -50 1 353 0 352 375 0 c233 0 375 4 375
                        10 0 5 -48 108 -107 230 l-106 220 -268 0 -269 0 -2 352 -3 352 -48 -54z"
              />
            </g>
          </svg>
        </button>
      </div>
      {/* </div> */}
    </motion.div>
  );
}
