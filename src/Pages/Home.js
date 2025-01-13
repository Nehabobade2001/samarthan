
import React, { useState } from 'react';
import { FaBars, FaTimes, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import logo from '../assets/logo3.webp';
import Course from '../Pages/Course';
import Contect from './Contect';
import Contectpage from './Contectpage';
import Video from './Video';
import Infinite from './Infinite';
import Footer from '../Pages/Footer';
import Aboute from './Aboute';
import Card from './Card';
import Bloge from './Bloge';
import Award from './Award';
import Gallary from './Gallary';

const App = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-evenly gap-80 items-center py-3 px-6">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-md text-blue-600 font-serif">Follow us on:</span>
            <span className="text-white h-8 w-8 bg-[#3B5998] rounded-full flex items-center justify-center">
              <FaFacebookF />
            </span>
            <span className="text-white h-8 w-8 bg-[#02B0E8] rounded-full flex items-center justify-center">
              <FaTwitter />
            </span>
            <span className="text-white h-8 w-8 bg-[#0073B0] rounded-full flex items-center justify-center">
              <FaLinkedinIn />
            </span>
            <span className="text-white h-8 w-8 bg-[#C22E2A] rounded-full flex items-center justify-center">
              <IoLogoYoutube />
            </span>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden text-2xl cursor-pointer" onClick={toggleNav}>
            {navOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>

      {/* Navbar Section */}
      <nav className={`bg-[#16589D] ${navOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-8 py-4 px-6 text-white">
          {['Home', 'About Us', 'Our Work', 'Resources', 'Training Center', 'Internal Governance', 'Blog', 'Gallery', 'Engage With Us'].map((item) => (
            <li key={item} className="text-center">
              <a href="#" className="hover:bg-[#062C44] hover:rounded-full hover:px-4 py-2 font-semibold block">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Page Components */}
      <Course />
      <Aboute/>
      <Contectpage />
      <Card/>
       <Contect />
    
      <Video />
      <Bloge/>
      <Award/>
      <Gallary/>
     
      <Infinite />
      <Footer />
    </div>
  );
};

export default App;
