import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { figmaLogo } from '../assets';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

console.log('Layout component rendering...');

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log('Layout function executing...');
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header className="bg-black border-b border-gray-800/50 sticky top-0 z-50 backdrop-blur-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={figmaLogo} alt="Eclypse Logo" className="h-8 w-auto sm:h-10" />
              <h2 className='text-white text-xl sm:text-2xl font-bold'>Eclypse</h2>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/categories" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                Categories
              </Link>
              <Link to="/products" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                Products
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                About
              </Link>
            </div>

            <div className="flex items-center space-x-6">
              {/* <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 px-4 py-2 rounded-lg bg-gray-900/50 text-white border border-gray-800 focus:outline-none focus:border-gray-700 placeholder-gray-500 transition-colors duration-200"
                />
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div> */}
              <Link to="/cart" className="text-gray-300 hover:text-white transition-colors duration-200">
                <ShoppingCartIcon className="h-6 w-6" />
              </Link>
              {/* <Link to="/account" className="text-gray-300 hover:text-white transition-colors duration-200">
                <UserIcon className="h-6 w-6" />
              </Link> */}
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-800/50">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/categories" 
                  className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link 
                  to="/products" 
                  className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-black text-white border-t border-gray-800/50">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Eclypse is your one-stop destination for premium products that enhance your lifestyle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">About</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">Contact</Link></li>
                <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">FAQ</Link></li>
                <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">Shipping</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
              <ul className="space-y-2">
                <li><Link to="/categories/men" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">Men's Fashion</Link></li>
                <li><Link to="/categories/women" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">Women's Fashion</Link></li>
                <li><Link to="/categories/accessories" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">Accessories</Link></li>
                <li><Link to="/categories/footwear" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base">Footwear</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Email: support@eclypse.com</li>
                <li>Phone: (+91) 1234569870</li>
                <li>Address: 123 E-commerce</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800/50 text-center text-gray-500 text-sm sm:text-base">
            <p>&copy; {new Date().getFullYear()} Eclypse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 