import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Logo className="h-8 brightness-0 invert" />
            </Link>
            <p className="text-sm">
              Leading the global shift toward a carbon-neutral economy through innovative renewable energy solutions.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-green-400">Services</Link></li>
              <li><Link to="/expertise" className="hover:text-green-400">Expertise</Link></li>
              <li><Link to="/about" className="hover:text-green-400">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-green-400">Projects</Link></li>
            </ul>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>info@energaia-institut.de</li>
              <li>0341 352 256 80</li>
              <li>Schwenninger Weg 1</li>
              <li>INUB8, 02763 Zittau</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-green-400">LinkedIn</a>
              <a href="#" className="block hover:text-green-400">Twitter</a>
              <a href="#" className="block hover:text-green-400">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Energaia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}