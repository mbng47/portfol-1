'use client'
import React from 'react';
import { Link } from 'react-scroll';


export default function Home(){

    return (
        <article id='home' className='h-screen -mt-20 pl-7 sm:pl-20 sm:pt-28 flex flex-col justify-center'>
            <h2 className='uppercase font-[999] text-5xl sm:text-7xl'>Web developer</h2>
            <h3 className='uppercase font-[900] text-5xl sm:text-6xl'>Martin Bungner</h3>
            <p className='text-xl font-normal mt-5 max-w-700px'>Welcome to my site. I'm a software developer from Sweden residing in Malmö.</p>
            <p className='text-xl font-normal mb-5 max-w-72 sm:mb-8 sm:max-w-3xl'>Explore to get to know me and my work.</p>
            <Link to="projects" smooth={true} duration={800} className="bg-white text-black tracking-wider text-lg font-bold max-w-40 uppercase py-2 sm:py-3 px-8 cursor-pointer">My Work</Link>
        </article>
    )
}

