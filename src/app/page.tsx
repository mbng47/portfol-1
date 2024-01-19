'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


export default function Page() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <main className={`min-h-screen w-full bg-pink-BG text-white py-14 px-16 duration-500 ${menuOpen ? '-translate-x-64' : ''}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <aside className={`min-h-screen w-64 absolute top-0 right-0 ${menuOpen ? 'block' : 'hidden'}`}>
        <Menu />
      </aside>
    </>
  )
}