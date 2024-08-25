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
        title: 'Flickr image search',
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
        slidesToShow: 3,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        centerPadding: '2rem',
        centerMode: true,
        responsive: [
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
        <article id='projects' className='h-screen w-full flex flex-row justify-center items-center px-10 sm:px-20 2xl:px-28'>
            <div className="px-20 max-w-md sm:max-w-full">
                <Slider {...carouselSettings} className=''>
                    {myProjects.map((project, index) => (
                        <div key={index} className='mx-6 flex flex-col justify-center items-center'>
                            <Image className='max-w-52 max-h-52 sm:max-w-72 sm:max-h-72 rounded-lg' src={project.img} alt={project.title} />
                            <h3 className='text-center'>{project.title}</h3>
                            <a href={project.site} className='text-center'>Site</a>
                            <a href={project.code} className='text-center'>Code</a>
                        </div>
                    ))}
                </Slider>
            </div>
        </article>
    )
}