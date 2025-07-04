import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`bg-[#2C3E50] fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2 md:py-3 shadow-lg' : 'py-4 md:py-6'}`}>
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 md:px-8">
        <Link to='' className="flex items-center space-x-2 md:space-x-3 rtl:space-x-reverse">
          <span className="self-center uppercase font-bold text-2xl md:text-4xl whitespace-nowrap text-white">
            Start Framework
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col md:flex-row items-start md:items-center p-4 md:p-0 mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6 rtl:space-x-reverse">
            <li>
              <NavLink to="about" className="block uppercase font-medium text-lg md:text-xl py-2 px-3 text-white">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="portfolio" className="block uppercase font-medium text-lg md:text-xl py-2 px-3 text-white">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className="block uppercase font-medium text-lg md:text-xl py-2 px-3 text-white">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
