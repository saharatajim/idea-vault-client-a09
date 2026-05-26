import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900  container mx-auto text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
    
        <div>
          <h3 className="  dark:text-white font-bold mb-4">Platform</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Ideas</a></li>
            <li><a href="#" className="hover:text-white">Categories</a></li>
            <li><a href="#" className="hover:text-white">Community</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>
          <p>Email: <a href="mailto:info@ideavault.com" className="hover:text-white">info@ideavault.com</a></p>
          <p>Phone: <span className="hover:text-white">+880 1234 567890</span></p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

       
        <div>
          <h3 className="dark:text-white font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaXTwitter /></a>
            <a href="#" className="hover:text-white"><FaLinkedin /></a>
            <a href="#" className="hover:text-white"><SiGmail /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} IdeaVault. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
