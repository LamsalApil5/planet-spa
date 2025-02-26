"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink instead of Link
import logo from "../assets/Images/logo.png";
import { X, Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#F5F1EE] shadow-sm font-[poppins]">
      <nav className="container mx-auto px-6 py-4">
        {/* Logo and Menu Container */}
        <div className="flex justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center space-x-2 text-yellow-950"
          >
            <img
              src={logo}
              alt="Planet Spa"
              className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-950">
                Planet Spa
              </h1>
              <p className="text-sm sm:text-lg italic text-yellow-950">
                Escape To Paradise
              </p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-col justify-between items-center space-y-4 text-brown-700 text-lg px-16">
            <div className="flex space-x-16  justify-between items-end">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-green-900" : "hover:text-yellow-950"
                }
              >
                HOME
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  isActive ? "text-green-800" : "hover:text-yellow-950"
                }
              >
                MENU
              </NavLink>
              <NavLink
                to="/book"
                className={({ isActive }) =>
                  isActive ? "text-green-800" : "hover:text-yellow-950"
                }
              >
                BOOK NOW
              </NavLink>
              <a
                href="https://wa.me/+9779845832239"
                className="hover:text-green-800 text-yellow-950"
                target="_blank"
                rel="noopener noreferrer"
              >
                WHATSAPP
              </a>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-green-800" : "hover:text-yellow-950"
                }
              >
                CONTACT
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "text-green-800" : "hover:text-yellow-950"
                }
              >
                BLOG
              </NavLink>
            </div>
            <div className="flex justify-center">
              <div
                className="rounded-full text-white py-4 px-16 text-center"
                style={{ backgroundColor: "rgb(118, 72, 58)" }}
              >
                <h2 className="text-4xl ">20% Discount on Booking</h2>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brown-700 focus:outline-none absolute top-16 right-4"
            >
              {isOpen ? <X size={28} /> : <Menu size={40} />}
            </button>
          </div>
        </div>

        {/* Banner (Mobile View - Below Logo) */}
        <div className="md:hidden flex justify-center mt-4">
          <div
            className="rounded-full text-white py-4 px-8 text-center"
            style={{ backgroundColor: "rgb(118, 72, 58)" }}
          >
            <h2 className="text-2xl">20% Discount on Booking</h2>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#F5F1EE] flex flex-col items-center justify-center space-y-6 text-xl text-brown-700 z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-brown-700"
          >
            <X size={32} />
          </button>
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-green-800" : "hover:text-yellow-950"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/menu"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-green-800" : "hover:text-yellow-950"
            }
          >
            MENU
          </NavLink>
          <NavLink
            to="/book"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-green-800" : "hover:text-yellow-950"
            }
          >
            BOOK NOW
          </NavLink>
          <a
            href="https://wa.me/+9779845832239"
            className="hover:text-green-800 text-yellow-950"
            target="_blank"
            rel="noopener noreferrer"
          >
            WHATSAPP
          </a>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-green-800" : "hover:text-yellow-950"
            }
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/blog"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-green-800" : "hover:text-yellow-950"
            }
          >
            BLOG
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
