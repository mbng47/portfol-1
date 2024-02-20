'use client'
import React, { useState } from 'react';
import { Link } from 'react-scroll';


export default function Menu() {



    return (
        <article className={`min-h-screen w-full flex flex-row justify-center`}>
            <ul className={`text-3xl fixed inset-y-1/2 flex flex-col justify-center items-center gap-4`}>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </article>
    )
}

