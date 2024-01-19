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

  // py-14 px-16

  return (
    <>
      <main className={`z-10 min-h-screen w-full absolute top-0 right-0 bg-pink-BG text-white duration-500 border-2 border-black border-dotted ${menuOpen ? '-translate-x-64' : ''}`}>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <aside className={`min-h-screen w-64 absolute top-0 right-0`}>
        <Menu />
      </aside>
    </>
  )
}