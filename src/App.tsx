import React from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Terminal, Coffee, Cpu } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "404 Not Found Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
    description: "The classic HTTP error code, now in wearable form. Perfect for those days when you just can't be found."
  },
  {
    id: 2,
    name: "Git Commit Hoodie",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800",
    description: "Commit to comfort with this super soft hoodie. Features a minimal git commit message design."
  },
  {
    id: 3,
    name: "Coffee.js Mug",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?auto=format&fit=crop&q=80&w=800",
    description: "Because every developer needs their daily dose of JavaScript and caffeine."
  },
  {
    id: 4,
    name: "Binary Beanie",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=800",
    description: "Keep your head warm while showing off your love for binary. One size fits all."
  },
  {
    id: 5,
    name: "Debug Mode Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800",
    description: "For those long debugging sessions. Warning: wearing this might result in people asking you to fix their computer."
  },
  {
    id: 6,
    name: "React Developer Polo",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800",
    description: "Look professional while showing your React pride. Perfect for casual Fridays."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Wear What You Code
          </h1>
          <p className="text-xl text-center text-indigo-100 mb-8">
            Premium developer merchandise for those who live and breathe code
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
              Shop Collection
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <Terminal className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Developer Focused</h3>
            <p className="text-gray-600">Designs that speak the language of code</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Coffee className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Comfortable for those long coding sessions</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <Cpu className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tech-Inspired</h3>
            <p className="text-gray-600">Designs that showcase your passion</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-gray-400 mb-8">Get the latest updates on new products and special offers</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900"
              />
              <button className="bg-indigo-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">New Arrivals</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Best Sellers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Shipping</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-gray-400">&copy; 2024 DevWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;