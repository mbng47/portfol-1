'use client'
import React, { useState } from 'react';


export default function Header({ menuOpen, setMenuOpen }) {
    

    return (
        <header className='w-screen sticky top-0 pt-10 pb-2 pl-14 pr-8 bg-pink-BG flex flex-row justify-between items-center border-b border-black bg-opacity-50'>
            <h2 className="text-2xl font-extrabold cursor-pointer">SWE/ENG</h2>
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