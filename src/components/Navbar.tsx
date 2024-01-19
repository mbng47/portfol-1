'use client'
import React, { useState } from 'react';


export default function Navbar({ menuOpen, setMenuOpen }) {
    

    return (
        <header className='w-full flex flex-row justify-between items-center border-solid border-black border-4'>
            <h2 className="ml-9 text-2xl font-extrabold cursor-pointer">SWE/ENG</h2>
            <button onClick={() => { setMenuOpen(!menuOpen) }}
                className="mr-12 flex flex-col justify-center items-center cursor-pointer">
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