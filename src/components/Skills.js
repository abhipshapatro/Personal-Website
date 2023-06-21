import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name="skills" className='bg-[#111827] w-full h-screen text-gray-300'>
        {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* heading */}
        <div className=' sm:text-left'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        {/* images */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center gap-8 py-8 '>
            <div className='shadow-md shadow-[#334155] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-2' src={HTML} alt="html icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#334155] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-2' src={CSS} alt="html icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#334155] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-2' src={JavaScript} alt="html icon" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#334155] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-2' src={ReactImg} alt="html icon" />
                <p className='my-4'>React JS</p>
            </div>
            <div className='shadow-md shadow-[#334155] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-2' src={Node} alt="html icon" />
                <p className='my-4'>Node JS</p>
            </div>
            <div className='shadow-md shadow-[#334155] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-2' src={FireBase} alt="html icon" />
                <p className='my-4'>FireBase</p>
            </div>
            <div className='shadow-md shadow-[#334155] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-2' src={GitHub} alt="html icon" />
                <p className='my-4'>GitHub</p>
            </div>
            <div className='shadow-md shadow-[#334155] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-2' src={Tailwind} alt="html icon" />
                <p className='my-4'>Tailwind CSS</p>
            </div>
            <div className='shadow-md shadow-[#334155] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto mt-2' src={Mongo} alt="html icon" />
                <p className='my-4'>Mongo DB</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
