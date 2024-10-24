import React, { useEffect } from "react";

import {card1} from '../../img';

export default function Card1() {


  return (
    <div className="bg-[#E6EEF3] py-6">
      <div
        className="bg-[#E6EEF3] shadow-lg shadow-gray-500/40 h-auto grid place-items-center max-w-[100vw] sm:pt-20 lg:pt-40 mx-auto sm:p-16 p-6 font-[sans-serif]"

      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6">
          <div
            className="flex justify-center md:justify-end w-full md:w-1/2"
          >
            <img
              src={card1}
              className="rounded-lg w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] shadow-lg shadow-gray-900/70"
              alt="Profile"
              loading="lazy" 

            />
          </div>

          <div
            className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left"
          >

            <h2 className="shadow-md shadow-[rgba(0,0,0,0.3)] text-center  text-black text-xl sm:text-3xl mb-6 sm:mb-10 px-6 sm:px-40 py-4 sm:py-6 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg font-bold"
             
             >
               
               A PROPOS DE NOUS 
            </h2>
            <p
              className="leading-relaxed text-gray-800 font-playfair text-sm sm:text-base lg:text-lg text-justify"

            >
              La société <strong>COGEB IMMOBILIERE</strong>, fondée en <strong>1999</strong> et dirigée par Monsieur <strong>Mohamed LAZREG</strong>, est agréée par le ministère de l’équipement de l’habitat et de l’aménagement du territoire. Son objectif principal est de développer des projets immobiliers de haute qualité en sélectionnant soigneusement les sites, en concevant des espaces répondant aux besoins des clients, et en garantissant un cadre de vie amélioré. Elle dispose d'une équipe compétente, notamment des architectes, bureaux d'études et de contrôle, qui accordent une attention particulière à l'architecture de ses bâtiments, devenus des références dans le domaine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}