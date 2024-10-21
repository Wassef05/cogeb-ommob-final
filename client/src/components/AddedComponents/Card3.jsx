import React from 'react';
import {bg} from '../../img';
import { useNavigate } from 'react-router-dom';

export default function Card3() {
  const navigate = useNavigate();
  return (
    <div className='mt-10'>
      <div className="relative w-5/6 mx-auto font-sans max-h-80 rounded-lg overflow-hidden before:absolute before:w-full before:h-max-h-72 before:inset-0 before:bg-[#1a412e] before:opacity-30 before:z-10 shadow-lg shadow-[rgba(0,0,0,0.6)]">
        <img src={bg} className="absolute inset-0 w-full h-80 object-cover" alt="Biglogo"/>

        <div className="min-h-[350px] relative z-30 h-max-h-72 max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6 rounded-lg">
        <p className="sm:text-2xl text-base text-center text-white">NOTRE DERNIER PROJET</p>

          <h2 className="sm:text-4xl pt-4 text-white text-2xl font-bold mb-2">VOUS POUVEZ DECOUVRIR AVEC NOUS 
          LES DERNIERS PROJETS REALISE </h2>
          
          <button
            type="button"
            onClick={()=>navigate("/searchProject?filter=terminee")}
            style={{
                background: "linear-gradient(104deg, rgba(25,222,10,1) 0%, rgba(52,240,8,1) 36%, rgba(180,241,155,1) 49%, rgba(194,245,174,1) 54%, rgba(99,225,93,1) 61%, rgba(19,220,36,1) 100%)"
              }}
            className="mt-6 bg-transparent text-black  text-xl py-3 px-6  rounded-lg hover:bg-white hover:text-white transition duration-300">
            DECOUVRIR
          </button>
        </div>
      </div>
    </div>
  );
}
