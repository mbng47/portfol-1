'use client'
import React, { useState } from 'react';


export default function Header({ menuOpen, setMenuOpen }) {
    
    return (
        <header className='w-screen h-20 sticky top-0 pt-12 pb-2 bg-pink-BG flex flex-row justify-between items-center pl-6 sm:pl-16 sm:pr-10'>
            <h2 className="text-xl sm:text-2xl font-extrabold cursor-pointer">SWE/ENG</h2>
            <button onClick={() => { setMenuOpen(!menuOpen) }}
                className="mr-10 flex flex-col justify-center items-center cursor-pointer">
                <span className={`bg-white block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
                </span>
                <span className={`bg-white block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm my-0.5 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} >
                </span>
                <span className={`bg-white block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${menuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
                </span>
            </button>
        </header>
    )
}