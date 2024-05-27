import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import bg from '../assets/image/bg.jpeg';

const BannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const slides = [
        {
            title: "BALLETTO",
            subtitle: "Балетная школа в Красноярске",
            backgroundImage: bg
        },
        {
            title: "Танец",
            subtitle: "Искусство движения",
            backgroundImage: bg
        },
    ];

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} className="relative h-[600px]">
                    <div
                        className="bs-overlay-image"
                        style={{
                            backgroundImage: `url(${slide.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100%',
                            position: 'relative'
                        }}
                    >
                        <div className="bg-overlay absolute inset-0 bg-black opacity-60"></div>
                        <div className="z-10 md:container mx-auto p-4 flex flex-col justify-center items-center relative">
                            <h1 className="text-7xl font-semibold mb-4 text-white">{slide.title}</h1>
                            <h3 className="text-xl text-white">{slide.subtitle}</h3>
                            <div className="buttons mt-16 flex gap-8 font-semibold text-lg">
                                <button>
                                    <Link to="/contact" className="px-8 py-4 bg-sky-200 hover:bg-teal-50 hover:transition-all rounded-lg uppercase">
                                        Записаться
                                    </Link>
                                </button>
                                <button>
                                    <Link to="/about" className="px-8 py-4 bg-sky-100 hover:bg-teal-50 hover:transition-all rounded-lg uppercase">
                                        О нас
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default BannerSlider;
