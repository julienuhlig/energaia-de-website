import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/90 fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-10" />
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-green-400"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/services" className="text-white hover:text-green-400">Services</Link>
            <Link to="/expertise" className="text-white hover:text-green-400">Expertise</Link>
            <Link to="/about" className="text-white hover:text-green-400">About Us</Link>
            <Link to="/projects" className="text-white hover:text-green-400">Projects</Link>
            <Link to="/contact" className="text-white hover:text-green-400">Contact Us</Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/services" 
                className="text-white hover:text-green-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/expertise" 
                className="text-white hover:text-green-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Expertise
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-green-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/projects" 
                className="text-white hover:text-green-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-green-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}