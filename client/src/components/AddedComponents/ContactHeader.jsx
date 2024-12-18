import { useTranslation } from "react-i18next";
import { LCC, email1, location1, webe1 } from "../../img";

export default function ContactHeader() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="relative h-[80vh] font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-[#0B4F48] before:opacity-20 before:z-10">
        <img
          src={LCC}
          alt="contact cover"
          loading="lazy" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="min-h-[350px] relative z-20 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-black p-6">
          {/* Add any translated title or heading here if needed */}
        </div>
      </div>

      <div className="grid -mt-20 mb-14 mx-auto max-w-[70vw] sm:max-w-[80vw] lg:grid-cols-3 gap-4 z-20 relative lg:left-16 max-lg:px-4">
        <div className="flex lg:w-[18vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-gradient-to-t from-gray-100 via-gray-50 to-gray-200 shadow-[0_6px_10px_-3px_rgba(0,0,0,0.3)]">
          <div className="bg-[#ffffff] rounded-full p-2">
            <img src={location1} className="w-8 h-8 m-auto" alt="location"/>
          </div>
          <h4 className="text-black text-base font-bold mt-4">{t("contactHeader.visitOffice")}</h4>
          <p className="text-sm text-black-600 mt-2">{t("contactHeader.address")}</p>
        </div>

        <div className="flex lg:w-[18vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-gradient-to-t from-gray-100 via-gray-50 to-gray-200 shadow-[0_6px_10px_-3px_rgba(0,0,0,0.3)]">
          <div className="bg-[#ffffff] rounded-full p-2">
            <img src={email1} className="w-8 h-8 m-auto" alt="email"/>
          </div>
          <h4 className="text-gray-800 text-base font-bold mt-4">{t("contactHeader.email")}</h4>
          <p className="text-sm text-gray-600 mt-2">{t("contactHeader.emailAddress")}</p>
        </div>

        <div className="flex lg:w-[18vw] flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-gradient-to-t from-gray-100 via-gray-50 to-gray-200 shadow-[0_6px_10px_-3px_rgba(0,0,0,0.3)]">
          <div className="bg-[#ffffff] rounded-full p-2">
            <img src={webe1} className="w-8 h-8 m-auto" alt="web"/>
          </div>
          <h4 className="text-gray-800 text-base font-bold mt-4">{t("contactHeader.chatWithUs")}</h4>
          <p className="text-sm text-gray-600 mt-2">{t("contactHeader.website")}</p>
        </div>
      </div>
    </div>
  );
}
