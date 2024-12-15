'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import calculator from '../images/calculator.png';
import megameetings from '../images/socialmedia.png';
import countries from '../images/countries.png';
import flickr from '../images/flickr.png';
import tamagotchi from '../images/tamagotchi.png';

export default function Projects() {

    const myProjects = [
        {
            title: 'Calculator',
            img: calculator,
            site: 'https://mbng47.github.io/FE22-js2-mp4-martin-bungner/',
            code: 'https://github.com/mbng47/FE22-js2-mp4-martin-bungner'
        },
        {
            title: 'Countries',
            img: countries,
            site: 'https://mbng47.github.io/FE22-js1-mp3-martin-bungner/',
            code: 'https://github.com/mbng47/FE22-js1-mp3-martin-bungner'
        },
        {
            title: 'Flickr',
            img: flickr,
            site: 'https://mbng47.github.io/FE22-js1-slutprojekt-martin-bungner/',
            code: 'https://github.com/mbng47/FE22-js1-slutprojekt-martin-bungner'
        },
        {
            title: 'Social media',
            img: megameetings,
            site: 'https://mbng47.github.io/FE22-js2-slutprojekt-martin-bungner/',
            code: 'https://github.com/mbng47/FE22-js2-slutprojekt-martin-bungner'
        },
        {
            title: 'Tamagotchi',
            img: tamagotchi,
            site: 'https://mbng47.github.io/FE22-js2-mp2-martin-bungner/',
            code: 'https://github.com/mbng47/FE22-js2-mp2-martin-bungner'
        }
    ];


    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
    };


    return (
        <article id='projects' className='h-screen w-full flex flex-row justify-center items-center px-10'>
            <div className="px-20 max-w-md sm:max-w-full">
                <Slider {...carouselSettings} className=''>
                    {myProjects.map((project, index) => (
                        <div key={index} className='h-80'>
                            <div className='mt-5 mx-2 sm:mx-6 2xl:mx-10 h-5/6 bg-green-B rounded-lg flex flex-col items-center pt-4 border border-black border-solid border-1'>
                                <div className='relative w-36 h-36 sm:max-w-72 sm:max-h-72 rounded-full'>
                                    <Image className='object-cover max-w-full max-h-full rounded-full' src={project.img} alt={project.title} fill={true} />
                                </div>
                                <div className='pt-5 text-black flex flex-col justify-center items-center space-y-3'>
                                    <h3 className='text-xl tracking-wider italic border-b border-black'>{project.title}</h3>
                                    <div className='text-lg flex flex-row justify-center space-x-2'>
                                        <a href={project.site} className='font-medium tracking-wide border border-black border-solid border-1 rounded px-2'>Site</a>
                                        <a href={project.code} className='font-medium tracking-wide border border-black border-solid border-1 rounded px-2'>Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </article>
    )
}