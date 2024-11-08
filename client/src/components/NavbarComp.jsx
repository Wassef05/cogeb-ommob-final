import { NavLink, Link, useLocation } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { FaGlobe } from "react-icons/fa"; 
import { fr, eng, logo, hamburgerMenu, close } from "../img";
import { useTranslation } from 'react-i18next';

export default function NavbarComp() {
  const { t, i18n } = useTranslation(); // Hook to use translations
  const [toggle, setToggle] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");
  const dropdownRef = useRef(null);

  const handleToggle = () => setToggle(!toggle);
  const handleLinkClick = () => {
    setToggle(false);
    setIsDropdownOpen(false);
  };

  const handleLanguageToggle = () => setIsLanguageDropdownOpen(!isLanguageDropdownOpen);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Change the language
    setIsLanguageDropdownOpen(false); // Close dropdown after selection
  };

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);

      if (currentScrollPosition > 0) {
        setNavbarBackground("bg-white-100/100 backdrop-blur-md");
      } else {
        setNavbarBackground("bg-transparent");
      }

      setIsNavbarVisible(currentScrollPosition < scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const navlinkStyles = ({ isActive }) => `
    text-black font-bold text-md sm:text-lg md:text-sm lg:text-xl md:mx-1 lg:mx-8 my-3
    transform translate-y-2 ${isActive ? 'text-green-600' : 'hover:text-[#006400]'} 
      hover:rounded-lg hover:p-0
  `;

  const dropdownLinkStyles = ({ isActive }) => `
    block px-4 py-2 ${isActive ? 'text-green-600' : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'}
  `;

  const languageLinkStyles = `block px-4 py-2 text-black hover:bg-gray-100 cursor-pointer flex items-center`;

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
            className={`relative mr-3 h-16 sm:h-32 md:h-28 lg:h-20 ml-10 transition-transform duration-300 ${scrollPosition > 0 ? 'scale-90' : 'scale-100'}`} 
            alt="logo"
            loading="eager"
          />
        </Navbar.Brand>

        <div className="flex sm:mr-1 items-center md:order-2">
          {currentUser && (
            <NavLink className={navlinkStyles}>
              <Link to="/profile" className="hover:text-black">
                {t('navbar.admin')}
              </Link>
            </NavLink>
          )}

          {/* Language Dropdown Icon */}
          <div className="relative ml-4">
            <FaGlobe
              className="text-green-600 text-lg cursor-pointer md:ml-0 md:mr-16"
              onClick={handleLanguageToggle}
            />
            {isLanguageDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <div className="flex flex-col">
                  <span
                    className={languageLinkStyles}
                    onClick={() => changeLanguage('fr')}
                  >
                    <img src={fr} alt="FR" className="w-5 h-5 mr-2" /> FR
                  </span>
                  <span
                    className={languageLinkStyles}
                    onClick={() => changeLanguage('en')}
                  >
                    <img src={eng} alt="ENG" className="w-5 h-5 mr-2" /> ENG
                  </span>
                </div>
              </div>
            )}
          </div>

          <button className="block md:hidden m-4" onClick={handleToggle}>
            <img src={toggle ? close : hamburgerMenu} alt="menu" className="h-16 w-6" loading="lazy" />
          </button>
        </div>

        <Navbar.Collapse className={`w-full flex-col md:flex-row md:w-auto md:items-center ml-32 ${toggle ? "block bg-white/90 p-6 rounded-3xl text-black pt-4" : "hidden md:flex"}`}>
          <NavLink className={navlinkStyles} to="/" end onClick={handleLinkClick}>
            {t('navbar.home')}
          </NavLink>

          <NavLink className={navlinkStyles} to="/apropos" onClick={handleLinkClick}>
            {t('navbar.about')}
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            ref={dropdownRef}
          >
            <span
              className={`${navlinkStyles({ isActive: isNosProjetsActive })} flex items-center cursor-pointer`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {t('navbar.projects')}
              <svg className="w-2.5 h-2.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </span>

            {isDropdownOpen && (
              <div className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-72 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <NavLink to="/searchProject?filter=terminee" className={dropdownLinkStyles} onClick={handleLinkClick}>
                      {t('navbar.completedProjects')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/searchProject?filter=en cours" className={dropdownLinkStyles} onClick={handleLinkClick}>
                      {t('navbar.ongoingProjects')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/searchProject?filter=future" className={dropdownLinkStyles} onClick={handleLinkClick}>
                      {t('navbar.futureProjects')}
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <NavLink className={navlinkStyles} to="/contact" onClick={handleLinkClick}>
            {t('navbar.contact')}
          </NavLink>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
