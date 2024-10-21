import { NavLink, Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import {logo} from '../img';
import {hamburgerMenu} from '../img';
import {close} from '../img';

export default function NavbarComp() {
  const [toggle, setToggle] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");

  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLinkClick = () => {
    setToggle(false);
    setIsDropdownOpen(false);
  };

  const location = useLocation(); // Hook pour obtenir la route actuelle

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);

      if (currentScrollPosition > 0) {
        setNavbarBackground(" bg-white-100/100 backdrop-blur-md"); // Changer de background
      } else {
        setNavbarBackground("bg-transparent"); // Rétablir la transparence
      }

      setIsNavbarVisible(currentScrollPosition < scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Fonction pour appliquer des styles dynamiques, y compris pour les éléments du dropdown
  const navlinkStyles = ({ isActive }) => `
    text-black font-bold text-md sm:text-lg md:text-sm lg:text-xl md:mx-1 lg:mx-8 my-3
    transform translate-y-2 ${isActive ? 'text-green-600' : 'hover:text-[#006400]'} 
      hover:rounded-lg hover:p-0
  `;

  const dropdownLinkStyles = ({ isActive }) => `
    block px-4 py-2 ${isActive ? 'text-green-600' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}
  `;

  // Vérifier si l'une des routes du dropdown "NOS PROJETS" est active
  const isNosProjetsActive = location.pathname.includes('/searchProject');

  return (
    <Navbar
      fluid
      rounded
      className={`fixed top-0 left-0 right-0 rounded-lg justify-between w-full z-50 transition-transform duration-300 ${navbarBackground} ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex flex-wrap rounded-lg md:flex-nowrap pb-6 w-full items-center justify-between">
        <Navbar.Brand href="/">
          <img
            src={logo}
            className={`relative mr-3 h-16 sm:h-32 md:h-28 lg:h-20 ml-10 transition-transform duration-300 ${scrollPosition > 0 ? 'scale-90' : 'scale-100'}`} // Adjust height and scaling
            alt="nom"
          />
        </Navbar.Brand>

        <div className="flex sm:mr-1 items-center md:order-2">
          {currentUser && (
            <NavLink className={navlinkStyles}>
              <Link to="/profile" className="hover:text-black">
                ADMIN
              </Link>
            </NavLink>
          )}

          <button className="block md:hidden m-4" onClick={handleToggle}>
            <img src={toggle ? close : hamburgerMenu} alt="menu" className="h-16 w-6 " />
          </button>
        </div>

        <Navbar.Collapse className={`w-full flex-col md:flex-row md:w-auto md:items-center ml-32  ${toggle ? "block bg-white/90 p-6 rounded-3xl text-black pt-4 " : "hidden md:flex"}`}>
          <NavLink className={navlinkStyles} to="/" end onClick={handleLinkClick}>
            ACCUEIL
          </NavLink>

          <NavLink className={navlinkStyles} to="/apropos" onClick={handleLinkClick}>
            A PROPOS
          </NavLink>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
          >
            <span
              className={`${navlinkStyles({ isActive: isNosProjetsActive })} flex items-center cursor-pointer`}
              onClick={handleDropdownToggle}
            >
              NOS PROJETS
              <svg className="w-2.5 h-2.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </span>

            {isDropdownOpen && (
              <div className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <NavLink
                      to="/searchProject?filter=terminee"
                      className={dropdownLinkStyles}
                      onClick={handleLinkClick}
                    >
                      Projets Réalisés
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/searchProject?filter=en cours"
                      className={dropdownLinkStyles}
                      onClick={handleLinkClick}
                    >
                      Projet En Cours
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/searchProject?filter=future"
                      className={dropdownLinkStyles}
                      onClick={handleLinkClick}
                    >
                      Futures Projets
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <NavLink className={navlinkStyles} to="/contact">
            CONTACT
          </NavLink>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
