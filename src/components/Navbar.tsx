import { Menu, X, Dumbbell } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Dumbbell className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">FitPro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/users" className="text-gray-600 hover:text-purple-600 transition-colors">
              For Users
            </Link>
            <Link to="/creators" className="text-gray-600 hover:text-purple-600 transition-colors">
              For Creators
            </Link>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/users"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              For Users
            </Link>
            <Link
              to="/creators"
              className="block px-3 py-2 text-gray-600 hover:text-purple-600 transition-colors"
            >
              For Creators
            </Link>
            <button className="w-full text-left px-3 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}