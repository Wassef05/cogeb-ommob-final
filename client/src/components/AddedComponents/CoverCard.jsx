import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CoverCard.css";
import { useTypewriter } from "react-simple-typewriter";

export default function CoverCard() {
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: ["Investissez intelligemment\n avec Cogeb Immobilière"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 3000,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const sponsorsElement = document.getElementById("sponsor");
      if (sponsorsElement) {
        sponsorsElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 40000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="covercard">
      <div
        className="p-1 w-3/4 md:w-1/2 sm:p-0 md:p-12 -mt-20 md:-mt-0 ml-2 md:ml-12 bg-[#fff]/50 rounded-lg slogan-container"
        style={{ borderTopRightRadius: '50px', height: '150px' }} 
      >
        <div className="textDiv text-center">
          <h1 className="deutschlands-font text-bright mobile-slogan fixed-height-text"> 
            <span className="baraka">
              {text.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
