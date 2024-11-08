import React from "react";
import { card1 } from '../../img';
import { useTranslation } from 'react-i18next';

export default function Card2() {
  const { t } = useTranslation(); // Using the translation hook

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-200 sm:mt-10 mt-2 h-auto grid place-items-center max-h-full max-w-[100vw] mx-auto sm:p-16 p-4 font-[sans-serif]">
      <div className="grid md:grid-cols-2 items-center gap-4 ">
        <div className="md:col-span-1">
          <div className="mb-12 sm:max-w-[50vw] max-w-full">
            <h2 className="shadow-md shadow-[rgba(0,0,0,0.3)] text-center text-black text-xl sm:text-3xl mb-6 sm:mb-10 px-6 sm:px-10 py-4 sm:py-6 bg-gradient-to-r from-slate-100 to-slate-50 rounded-lg font-bold">
              {t('card2.objective')} {/* Translated header */}
            </h2>
            <p className="text-black font-playfair text-sm sm:text-base text-justify leading-6 sm:leading-7">
              {t('card1.description1')} <strong>{t('card1.cogebImmobiliere')}</strong> {t('card1.description2')} {t('card1.mohamedLazreg')} {t('card1.description3')}
            </p>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={card1}
            className="lg:h-[400px] h-[250px] sm:h-[300px] rounded-3xl shadow-[10px_-10px_10px_rgba(0,0,0,0.1)]"
            alt={t('card2.objective')} // Alt text also translated
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
