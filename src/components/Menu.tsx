'use client'
import React, { useState } from 'react';


export default function Menu() {



    return (
        <article className={`min-h-screen w-full flex flex-row justify-center`}>
            <ul className={`text-3xl fixed inset-y-1/2 flex flex-col justify-center items-center gap-4`}>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </article>
    )
}

