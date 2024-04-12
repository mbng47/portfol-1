'use client'
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Icon from 'react-simple-icons';


export default function Menu({ menuOpen, setMenuOpen }) {

    return (
        <article className={`min-h-screen w-full flex flex-row justify-center border border-black border border-solid`}>
            <ul className={`text-3xl fixed inset-y-1/2 flex flex-col justify-center items-center gap-4`}>
                <li><Link to="home" smooth={true} duration={800} className="cursor-pointer" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={800} className="cursor-pointer" onClick={() => menuOpen ? setMenuOpen(false) : ''}>About</Link></li>
                <li><Link to="projects" smooth={true} duration={800} className="cursor-pointer" onClick={() => menuOpen ? setMenuOpen(false) : ''}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={800} className="cursor-pointer" onClick={() => menuOpen ? setMenuOpen(false) : ''}>Contact</Link></li>
            </ul>
            <ul>
                <Icon name='github' size={30} style={{}} />
                <Icon name='linkedin' size={30} style={{ color: '#0077b5' }} />
            </ul>
        </article>
    )
}

