
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, ContactIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xl font-bold">
              <Book className="h-6 w-6 text-emerald-400" />
              <span>Nitesh Books</span>
            </div>
            <p className="text-gray-400">
              Your premier destination for digital books. Discover, learn, and grow with our extensive collection.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</Link>
              <Link to="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact Us</Link>
              <Link to="/login" className="text-gray-400 hover:text-emerald-400 transition-colors">Login</Link>
              <Link to="/signup" className="text-gray-400 hover:text-emerald-400 transition-colors">Sign Up</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</Link>
              <Link to="/refund" className="text-gray-400 hover:text-emerald-400 transition-colors">Refund Policy</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="text-gray-400 space-y-2">
              <p>Rewari, Haryana</p>
              <p>niteshbusiness06@gmail.com</p>
              <p>+91 9896762610</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Nitesh Books. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
