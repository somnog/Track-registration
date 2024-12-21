import React from "react";
import { Link } from "react-router-dom";

const scrollToSection = (id) => {
  const section = document.querySelector(id);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth", // Smooth scrolling effect
      block: "start", // Align to the top of the section
    });
  }
};
const Navbar = () => {
  return (
    <nav  className="fixed z-10 top-0 w-full  p-4 bg-background ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-xl font-bold text-primary">
          Community Platform
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-secondary text-text">
            Home
          </Link>
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              scrollToSection("#tracks");
            }}
            className="hover:text-secondary text-text"
          >
            Tracks
          </button>
          <Link to="/about" className="hover:text-secondary text-text">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
