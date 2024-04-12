'use client'
import React from 'react';
import Image from 'next/image';
import profilePic from '../images/profilePic.png'


export default function About() {

    return (
            <article id='about' className='h-screen w-full pt-28 sm:pt-0 pb-10 flex flex-col sm:flex-row justify-center items-center gap-9 px-10 sm:px-20 2xl:px-28'>
                <Image className='max-w-52 max-h-52 sm:max-w-72 sm:max-h-72 rounded-full' src={profilePic} alt='Profile picture of Martin'/>
                <p className='text-lg overflow-y-scroll sm:overflow-y-visible'>
                    Better safe than sorry. That's my motto. Yeah, you do seem to have a little 'shit creek' action going. You know, FYI, you can buy a paddle. Did you not plan for this contingency? I mean the Starship Enterprise had a self-destruct button. I'm just saying. 
                    Look, let's start with some tough love, alright? Ready for this? Here it goes: you two suck at peddling meth. Period. Good! 'Oh boo-hoo, I won't cook meth anymore!' You're a crybaby! Who needs you?! Hey, I'm unplugging the website, so no more money laundering! How do you like that?! 
                    Great, perfect you know... this is just. I told her you were my A Team. Oh, hello Mrs. White, the good news is the IRS has been paid off, the bad news is... ach, Jesus!
                    </p>
            </article>
    )
}
