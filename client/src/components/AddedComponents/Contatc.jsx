import React from "react";
import {email1} from "../../img";
import {phone1} from "../../img";
import {location1} from "../../img";
import {webe1} from "../../img";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h1 className="text-[#A95834] font-averia font-bold text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-16">
        CONTACT
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl text-center justify-center items-center">

        {/* Case 1 */}
        <div className="py-4 text-base w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <img src={email1} className="w-10 h-8 mb-2" alt="email icon" />
          <div className="text-center font-bold">
            <h3 className="text-black">E-mail</h3>
            <p className="text-black text-sm sm:text-base">contact@cogeb-immobiliere.com</p>
          </div>
        </div>

        {/* Case 2 */}
        <div className="py-4 text-base w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <img src={phone1} className="w-8 h-8 mb-2" alt="phone icon" />
          <div className="text-center font-bold">
            <h3 className="text-black">TELEPHONE</h3>
            <p className="text-black text-sm sm:text-base">+216 73 323 435</p>
          </div>
        </div>

        {/* Case 3 */}
        <div className="py-4 text-base w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <img src={webe1} className="w-8 h-8 mb-2" alt="website icon" />
          <div className="text-center font-bold">
            <h3 className="text-black">Site Web</h3>
            <p className="text-black text-sm sm:text-base">Cogeb-immobiliére.com</p>
          </div>
        </div>

        {/* Case 4 */}
        <div className="py-4 text-base w-full h-full bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-lg flex flex-col justify-center items-center">
          <img src={location1} className="w-8 h-8 mb-2" alt="location icon" />
          <div className="text-center font-bold">
            <h3 className="text-black">Adresse</h3>
            <p className="text-black text-sm sm:text-base">
              Avenue de l'environnement, Sousse, Tunisia, 4000
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
