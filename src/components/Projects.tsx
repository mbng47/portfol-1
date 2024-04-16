'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Projects() {

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        centerPadding: '2rem',
        centerMode: true,
    }

    return (
        <article id='projects' className='h-screen w-full flex flex-row justify-center items-center px-10 sm:px-20 2xl:px-28'>

            <div className="px-20 max-w-lg">
                <Slider {...carouselSettings}>
                    <div className="mx-auto">
                        <img className="w-full rounded-md" src="https://placeimg.com/640/480/animals" alt="Slide 1" />
                    </div>
                    <div className="px-2">
                        <img className="w-full rounded-md" src="https://placeimg.com/640/480/nature" alt="Slide 2" />
                    </div>
                    <div className="px-2">
                        <img className="w-full rounded-md" src="https://placeimg.com/640/480/architecture" alt="Slide 3" />
                    </div>
                </Slider>
            </div>

        </article>
    )
}
