'use client'
import React, { useState } from 'react';
import { Link } from 'react-scroll';


export default function Menu({ menuOpen, setMenuOpen }) {

    return (
        <article className={`min-h-screen w-full flex flex-row justify-center`}>
            <ul className={`text-3xl fixed inset-y-1/2 flex flex-col justify-center items-center gap-4 sm:gap-2 xl:gap-6`}>
                <li><Link to="home" smooth={true} duration={800} className="cursor-pointer" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={800} className="cursor-pointer" onClick={() => menuOpen ? setMenuOpen(false) : ''}>About</Link></li>
                <li><Link to="projects" smooth={true} duration={800} className="cursor-pointer" onClick={() => menuOpen ? setMenuOpen(false) : ''}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={800} className="cursor-pointer" onClick={() => menuOpen ? setMenuOpen(false) : ''}>Contact</Link></li>
            </ul>
        </article>
    )
}

