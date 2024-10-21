import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from "../img";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Icônes de marque
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Icônes solides

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-300 to-slate-200 mt-16 pt-20 p-10 font-sans tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="lg:flex lg:items-center flex-col">
          <Link to="#">
            <img src={logo} alt="logo" className="mx-auto" loading="lazy" />
          </Link>
          <p className="mt-4 text-black">
            Notre vision est de fournir des outils fiables pour des créations sans limites.
          </p>
        </div>

        <nav>
          <h1 className="text-black text-lg font-bold mb-6">Liens</h1>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-black hover:text-black text-sm font-bold">ACCUEIL</Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:text-black text-sm font-bold">A PROPOS</Link>
            </li>
            <li>
              <Link to="/searchProject" className="text-black hover:text-black text-sm font-bold">NOS PROJETS</Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:text-black text-sm font-bold">CONTACT</Link>
            </li>
          </ul>
        </nav>

        <div>
          <h1 className="text-black text-lg font-bold mb-6">Contact</h1>
          <ul className="space-y-4">
            <li>
              <a href="mailto:cogebimmobiliere@gmail.com" className="text-black hover:text-black text-sm font-bold">cogebimmobiliere@gmail.com</a>
            </li>
            <li>
              <a href="tel:+21673323435" className="text-black hover:text-black text-sm font-bold">+216 73 323 435</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-black text-sm font-bold">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Avenue de l'environnement, Sousse, Tunisia, 4000
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-black text-lg font-bold mb-6">Suivez-nous</h4>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black text-2xl">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black text-2xl">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="mailto:cogebimmobiliere@gmail.com" className="text-black hover:text-black text-2xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          <p className="mt-4 text-sm text-black">
            Restez connectés avec nous pour des mises à jour et des offres exclusives.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://wa.me/21673323435" target="_blank" rel="noopener noreferrer" className="text-black hover:text-black text-2xl">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="tel:+21673323435" className="text-black hover:text-black text-2xl">
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </div>
        </div>
      </div>

      <p className="text-black-300 text-center text-sm mt-10">
        © Copyright {currentYear} by cogeb-immobiliere. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
