'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


export default function Page() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <main className={`z-10 min-h-screen w-screen absolute top-0 right-0 bg-pink-BG text-white duration-500 ${menuOpen ? '-translate-x-40 sm:-translate-x-64' : ''}`} onClick={() => menuOpen ? setMenuOpen(false) : ''}>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <aside className={`min-h-screen w-40 sm:w-64 absolute top-0 right-0`}>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </aside>
    </>
  )
}