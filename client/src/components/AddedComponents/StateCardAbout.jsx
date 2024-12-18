import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { logement1 } from "../../img";
import { commercial01 } from "../../img";
import { parking } from "../../img";
import { useTranslation } from 'react-i18next'; // Importer le hook de traduction

const fetchProjectCount = async () => {
  try {
    const response = await axios.get('https://immob-back.onrender.com/api/projects/count');
    return response.data.count;
  } catch (error) {
    console.error("Erreur lors de la récupération du nombre de projets", error);
    return 0;
  }
}

const fetchProjectParkingCount = async () => {
  try {
    const response = await axios.get('https://immob-back.onrender.com/api/projects/countParking');
    return response.data.count;
  } catch (error) {
    console.error("Erreur lors de la récupération du nombre de parkings projets", error);
    return 0;
  }
}

export default function StateCard() {
  const { t } = useTranslation(); // Initialiser la traduction
  const [projectCount, setProjectCount] = useState(0);
  const [projectParkingCount, setProjectParkingCount] = useState(0);
  const [displayedProjectCount, setDisplayedProjectCount] = useState(0);
  const [displayedParkingCount, setDisplayedParkingCount] = useState(0);

  const animateValue = (start, end, setter) => {
    let current = start;
    const increment = Math.ceil((end - start) / 100);
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      current += increment;
      setter(Math.min(current, end));
      if (current >= end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    const getCounts = async () => {
      const projectCount = await fetchProjectCount();
      const projectParkingCount = await fetchProjectParkingCount();

      setProjectCount(projectCount);
      setProjectParkingCount(projectParkingCount);

      animateValue(0, projectCount, setDisplayedProjectCount);
      animateValue(0,  projectParkingCount, setDisplayedParkingCount);
    };

    getCounts();
  }, []);

  return (
    <div className='mt-12 flex text-center justify-center '>
      <div className="text-white pb-10 m-2 font-[sans-serif] ">
        <div className="max-w-5xl px-0 ">
          <div className="px-10 sm:flex sm:flex-col lg:flex-row lg:grid-cols-3 bg-gradient-to-r from-gray-50 to-gray-200 rounded-[40px] h-38 gap-3 max-md:max-w-md mx-auto border-black border-1 items-center shadow-md shadow-[rgba(0,0,0,0.1)]">
            <div className="rounded-lg overflow-hidden">
              <div className="pt-4 p-0 sm:p-1 md:p-2 grid grid-cols-3">
                <img src={logement1} className='p-2 col-span-1' alt='logement' loading="lazy"/>
                <div className='col-span-2'>
                  <h3 className="text-xs sm:text-base md:text-lg font-semibold uppercase mb-2 ml-4 lg:mt-2 text-black">
                    {t('stateCard.housing')}
                  </h3>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{displayedProjectCount}<span className='text-black'>+</span></h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <div className="pt-4 p-0 sm:p-1 md:p-2 grid grid-cols-3">
                <img src={commercial01} className='p-2 col-span-1' alt='commercial' loading="lazy"/>
                <div className='flex flex-col col-span-2'>
                  <h3 className="text-xs sm:text-base mt-3 text-center md:text-lg font-semibold uppercase mb-2 text-black">
                    {t('stateCard.commercialSpaces')}
                  </h3>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{displayedProjectCount} <span className='text-black'>+</span></h3>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <div className="pt-4 p-0 sm:p-1 md:p-2 grid grid-cols-3">
                <img src={parking} className='p-2 col-span-1' alt='parking' loading="lazy"/>
                <div className='flex flex-col col-span-2'>
                  <h3 className="text-xs sm:text-base mt-3 text-center md:text-lg font-semibold uppercase mb-2 text-black">
                    {t('stateCard.parkingSpaces')}
                  </h3>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{displayedParkingCount} <span className='text-black'>+</span></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
