'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import calculator from '../images/calculator.png';
import profilePic from '../images/profilePic.png';
import Eye from '../images/eye.png';
import Rps from '../images/rps.png';
import Megameetings from '../images/socialmedia.png';
import Tamagotchi from '../images/tamagotchi.png';

export default function Projects() {

const myProjects = [
    {
        title: 'Calculator',
        img: `${calculator}`,
        site: 'https://mbng47.github.io/FE22-js2-mp4-martin-bungner/',
        code: 'https://github.com/mbng47/FE22-js2-mp4-martin-bungner'
    },
    {
        title: 'Social media',
        img: '../images/socialmedia.png',
        site: 'https://mbng47.github.io/FE22-js2-slutprojekt-martin-bungner/',
        code: 'https://github.com/mbng47/FE22-js2-slutprojekt-martin-bungner'
    },
    {
        title: 'Countries',
        img: '',
        site: 'https://mbng47.github.io/FE22-js1-mp3-martin-bungner/',
        code: 'https://github.com/mbng47/FE22-js1-mp3-martin-bungner'
    },
    {
        title: 'Flickr image search',
        img: '',
        site: 'https://mbng47.github.io/FE22-js1-slutprojekt-martin-bungner/',
        code: 'https://github.com/mbng47/FE22-js1-slutprojekt-martin-bungner'
    },
    {
        title: 'Tamagotchi',
        img: '',
        site: 'https://mbng47.github.io/FE22-js2-mp2-martin-bungner/',
        code: 'https://github.com/mbng47/FE22-js2-mp2-martin-bungner'
    },
    {
        title: 'Eye',
        img: '',
        site: 'https://mbng47.github.io/FE22-js1-mp4-martin-bungner/',
        code: 'https://github.com/mbng47/FE22-js1-mp4-martin-bungner'
    },
    {
        title: 'Rock Paper Scissors',
        img: '',
        site: 'https://mbng47.github.io/FE22-js1-mp2-martin-bungner/',
        code: 'https://github.com/mbng47/FE22-js1-mp2-martin-bungner'
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
                <Slider {...carouselSettings}>
                    {/* {myProjects.map((project, index) => {
                        console.log(project.title , index);
                        <div className='mx-auto'>
                            <Image className='max-w-52 max-h-52 sm:max-w-72 sm:max-h-72 rounded-full' src={calculator} alt={project.title} />
                            <h3>{project.title}men hej då</h3>
                            <a href={project.site}>Site</a>
                            <a href={project.code}>Code</a>
                        </div>
                    })} */}


                    <div className="mx-auto">
                    <img className='max-w-52 max-h-52 sm:max-w-72 sm:max-h-72 rounded-full' src={myProjects[1].img} alt='Profile picture of Martin'/>
                    {/* <h3>{myProjects[1].img}</h3> */}
                    </div>
                    <div className="px-2">
                        <img className="w-full rounded-md" src="../images/eye.png" alt="Slide 2" />
                    </div>
                    <div className="px-2">
                        <img className="w-full rounded-md" src="https://placeimg.com/640/480/architecture" alt="Slide 3" />
                    </div>
                </Slider>
            </div>
        </article>
    )
}
