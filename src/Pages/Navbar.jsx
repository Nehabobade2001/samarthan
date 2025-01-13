

import React, { useState, useEffect } from "react";
// import logo from "../assets/catseyeLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [showAbout, setShowAbout] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-50 top-0 left-0 w-full px-6 py-4 transition-all duration-300 ${
        isScrolled ? "bg-[#050E2B] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        <div className="h-12 w-52">
          {/* <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-cover bg-transparent"
          /> */}
        </div>

       
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

       
        <nav
          className={`${
            menuOpen
              ? "absolute top-16 left-0 w-full bg-[#050E2B] p-6 rounded-b-lg flex flex-col space-y-4 items-center md:static md:flex md:flex-row md:space-y-0 md:space-x-8"
              : "hidden md:flex md:space-x-8"
          } text-white text-sm font-semibold transition-all duration-300`}
        >
          <a
            href="#home"
            className="hover:text-pink-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-pink-500 transition duration-300"
            onClick={() => setShowAbout(true)}
          >
            About Us
          </a>
          <a
            href="#faq"
            className="hover:text-pink-500 transition duration-300"
          >
            FAQ
          </a>
          <a
            href="#contact"
            className="hover:text-pink-500 transition duration-300"
          >
            Contact
          </a>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
            <Link to="/login">Login</Link>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
