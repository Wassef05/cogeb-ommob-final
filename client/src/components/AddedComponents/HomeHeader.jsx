import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {coverPNG} from "../../img";
import {cover2JPG} from "../../img";
import {cover1} from "../../img";
import { useTypewriter } from "react-simple-typewriter";
import './HomeHeader.css';

const slides = [cover1 , coverPNG ,cover2JPG];

export default function HomeHeader() {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  const [text] = useTypewriter({
    words: ["Investissez intelligemment\n avec Cogeb Immobilière"],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 20,
    delaySpeed: 3000,
  });

  return (
<div className="relative z-10 mt-0 bg-[#E6EEF3]">
  <Slider {...settings} className="w-full">
    {slides.map((slide, index) => (
      <div key={index} className="w-full">
        <div
          className="custom-slide w-full h-screen bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      </div>
    ))}
  </Slider>

  {/* Conteneur pour le slogan avec fond semi-transparent */}
  <div className="slogan-container  " >
    <h1 className="simple-font text-bright slogan-text">
              {text}
              <span className="cursor"></span>
            </h1>
  </div>
</div>

  );
}