import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cover1 from "../../img/cover1.jpg";
import cover2 from "../../img/cover2.jpg";
import cover3 from "../../img/cover1.png";
import { useTypewriter } from "react-simple-typewriter";
import './HomeHeader.css';

const slides = [cover3, cover1, cover2];

export default function HomeHeader() {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  const [text] = useTypewriter({
    words: ["Investissez intelligemment\n avec Cogeb Immobilière"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
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
              <span className="cursor">🖊</span>
            </h1>
  </div>
</div>

  );
}
