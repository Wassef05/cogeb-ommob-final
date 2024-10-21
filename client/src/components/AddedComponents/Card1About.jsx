import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {card1} from '../../img';

export default function Card1() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
  
      <div
        className="bg-[#E6EEF3] shadow-lg shadow-gray-500/10 h-auto grid place-items-center max-w-[100vw] sm:pt-20 lg:pt-40 mx-auto sm:p-16 p-6 font-[sans-serif]"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-6">
          {/* Image Section */}
          <div
            className="flex justify-center md:justify-end w-full md:w-1/2"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={card1}
              className="rounded-lg w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] shadow-lg shadow-gray-900/70"
              alt="Profile"
              data-aos="fade-right"
              data-aos-delay="400"
            />
          </div>

          <div
            className="flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            {/* <h2
              className="text-[#A95834] font-averia font-bold text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-16"
              data-aos="fade-down"
            >
              A PROPOS DE NOUS
            </h2> */}
            <h2 className="shadow-md shadow-[rgba(0,0,0,0.3)] text-center  text-black text-xl sm:text-3xl mb-6 sm:mb-10 px-6 sm:px-40 py-4 sm:py-6 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg font-bold"
             data-aos="fade-down"
             >
               
               A PROPOS DE NOUS 
            </h2>
            <p
              className="leading-relaxed text-gray-800 font-playfair text-sm sm:text-base lg:text-lg text-justify"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              La société <strong>COGEB IMMOBILIERE</strong>, fondée en <strong>1999</strong> et dirigée par Monsieur <strong>Mohamed LAZREG</strong>, est agréée par le ministère de l’équipement de l’habitat et de l’aménagement du territoire. Son objectif principal est de développer des projets immobiliers de haute qualité en sélectionnant soigneusement les sites, en concevant des espaces répondant aux besoins des clients, et en garantissant un cadre de vie amélioré. Elle dispose d'une équipe compétente, notamment des architectes, bureaux d'études et de contrôle, qui accordent une attention particulière à l'architecture de ses bâtiments, devenus des références dans le domaine.
            </p>
          </div>
        </div>
      </div>
   
  );
}
// import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { card1 } from '../../img';
// import { background } from '../../img'; 
// import { FaMapMarkedAlt, FaBuilding } from 'react-icons/fa';
// import './Card1.css';

// export default function AboutUs() {
//   useEffect(() => {
//     AOS.init({ duration: 1200 });
//   }, []);

//   return (
//     <div className="relative bg-white py-16">
//       <div className="absolute inset-0 w-full h-full bg-no-repeat bg-left opacity-30" style={{ backgroundImage: `url(${background})` }}></div>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 md:px-12 relative z-10">
        
//         <div className="relative flex justify-center items-center">
          
//           <div className="rounded-full overflow-hidden w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
//             <div className="circle-green pulse"></div>
//             <div className="circle-yellow pulse"></div>
            
//             <img
//               src={card1}
//               className="object-cover w-full h-full"
//               alt="Team working"
//               data-aos="zoom-in"
//             />
//           </div>
//         </div>

//         <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
//           <div>
//             <h3 className="text-gray-400 text-lg sm:text-xl font-semibold mb-2 uppercase underline">À Propos De Nous</h3>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Le promoteur le plus novateur en Tunisie</h2>
//             <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
//               La société <strong>COGEB IMMOBILIERE</strong>, fondée en <strong>1999</strong> et dirigée par Monsieur <strong>Mohamed LAZREG</strong>, est agréée par le ministère de l’équipement de l’habitat et de l’aménagement du territoire. Son objectif principal est de développer des projets immobiliers de haute qualité en sélectionnant soigneusement les sites, en concevant des espaces répondant aux besoins des clients, et en garantissant un cadre de vie amélioré. Elle dispose d'une équipe compétente, notamment des architectes, bureaux d'études et de contrôle, qui accordent une attention particulière à l'architecture de ses bâtiments, devenus des références dans le domaine.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div className="flex items-center">
//               <FaMapMarkedAlt className="text-3xl sm:text-4xl md:text-5xl text-black mr-4" />
//               <div>
//                 <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Meilleurs emplacements pour une vie idéale.</h3>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <FaBuilding className="text-3xl sm:text-4xl md:text-5xl text-black mr-4" />
//               <div>
//                 <h3 className="text-base sm:text-lg lg:text-xl font-semibold">Architecture moderne pour un vrai bien-être.</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


