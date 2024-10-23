import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { coverPNG, cover2JPG, cover1jpg } from "../../img"; 
import { useTypewriter } from "react-simple-typewriter";
import './HomeHeader.css';

const slides = [cover1jpg, coverPNG, cover2JPG];

export default function HomeHeader() {
  const settings = {
    infinite: true,
    speed: 1000,
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

  const slideRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const imgElement = imageRefs.current[entry.target.getAttribute('data-index')];
          if (imgElement && imgElement.dataset.src) {
            imgElement.src = imgElement.dataset.src;
            imgElement.classList.add('loaded');
            observer.unobserve(entry.target); 
          }
        }
      });
    }, { threshold: 0.1 });
  
    slideRefs.current.forEach((slide, index) => {
      if (slide) {
        observer.observe(slide);
      }
    });
  
    return () => {
      slideRefs.current.forEach((slide) => {
        if (slide) observer.unobserve(slide);
      });
    };
  }, []);
  

  return (
    <div className="relative z-10 mt-0 bg-[#E6EEF3]">
      <Slider {...settings} className="w-full">
        {slides.map((slide, index) => (
          <div key={index} className="w-full" ref={el => (slideRefs.current[index] = el)} data-index={index}>
            <div className="custom-slide w-full h-screen bg-center bg-no-repeat">
            <img 
  src={slide}
  alt={`Slide ${index}`} 
  ref={el => (imageRefs.current[index] = el)}
  className="w-full h-full object-cover" 
  loading={index === 0 ? "eager" : "lazy"} // Eager load the first image
  onLoad={(e) => e.target.classList.add('loaded')} 
/>
            </div>
          </div>
        ))}
      </Slider>

      <div className="slogan-container">
        <h1 className="simple-font text-bright slogan-text">
          {text}
          <span className="cursor"></span>
        </h1>
      </div>
    </div>
  );
}
