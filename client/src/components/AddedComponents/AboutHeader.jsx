import React, { useEffect } from "react";
import{cover1jpg}  from "../../img";
import StateCard from "./StateCardAbout";

const AboutHeader = () => {


  return (
    <div>
      <div className="relative h-[80vh] font-sans before:absolute before:w-full before:h-full before:inset-0  before:opacity-50 before:z-10">
        <img
          src={cover1jpg}
          alt="contact cover"
          loading="lazy" 

          className="absolute inset-0 w-full h-full object-cover"
        />

      </div>

      <div className="relative z-20 -mt-24 mb-16 flex justify-center items-center">
        <StateCard />
      </div>

      <div className="grid items-center justify-center mb-16 mx-auto max-w-[70vw] sm:max-w-[80vw] lg:grid-cols-3 gap-4 z-20 relative lg:left-16 max-lg:px-4">
        <div
          className="flex flex-auto items-center justify-center"

        ></div>
      </div>
    </div>
  );
};

export default AboutHeader;
