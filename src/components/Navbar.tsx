import React from 'react';
import { Code2, ShoppingCart, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">DevWear</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">New Arrivals</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">T-Shirts</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Hoodies</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Accessories</a>
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ShoppingCart size={20} />
              <span className="bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-600">New Arrivals</a>
            <a href="#" className="block px-3 py-2 text-gray-600">T-Shirts</a>
            <a href="#" className="block px-3 py-2 text-gray-600">Hoodies</a>
            <a href="#" className="block px-3 py-2 text-gray-600">Accessories</a>
          </div>
        </div>
      )}
    </nav>
  );
}