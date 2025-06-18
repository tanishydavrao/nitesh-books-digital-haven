
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Book, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-emerald-700">
            <Book className="h-8 w-8" />
            <span>Nitesh Books</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</Link>
            <Link to="/privacy" className="text-gray-700 hover:text-emerald-600 transition-colors">Privacy Policy</Link>
            <Link to="/refund" className="text-gray-700 hover:text-emerald-600 transition-colors">Refund Policy</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</Link>
              <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</Link>
              <Link to="/privacy" className="text-gray-700 hover:text-emerald-600 transition-colors">Privacy Policy</Link>
              <Link to="/refund" className="text-gray-700 hover:text-emerald-600 transition-colors">Refund Policy</Link>
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/login">
                  <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
