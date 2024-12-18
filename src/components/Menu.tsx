'use client'
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Icon from 'react-simple-icons';


export default function Menu({ menuOpen, setMenuOpen }) {

    return (
        <article className={`min-h-screen w-full flex flex-col justify-center items-center`}>
            <section className='fixed'>
            <ul className={`text-3xl flex flex-col items-center gap-4`}>
                <li><Link to="home" smooth={true} duration={800} className="cursor-pointer" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={800} className="cursor-pointer" onClick={() => menuOpen ? setMenuOpen(false) : ''}>About</Link></li>
                <li><Link to="projects" smooth={true} duration={800} className="cursor-pointer" onClick={() => menuOpen ? setMenuOpen(false) : ''}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={800} className="cursor-pointer" onClick={() => menuOpen ? setMenuOpen(false) : ''}>Contact</Link></li>
            </ul>
            <ul className={'flex justify-center pt-5 gap-3'}>
                <li><a href="https://github.com/mbng47" target="_blank" rel="noopener noreferrer"><Icon name='github' size={30} className={'cursor-pointer'} /></a></li>
                <li><a href="https://www.linkedin.com/in/martin-bungner-edwards-9271bb23a/" target="_blank" rel="noopener noreferrer"><Icon name='linkedin' size={30} className={'cursor-pointer'} style={{ color: '#0077b5' }} /></a></li>
            </ul>
            </section>
        </article>
    )
}
