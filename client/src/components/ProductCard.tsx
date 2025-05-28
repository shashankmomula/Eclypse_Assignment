import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { StarIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = () => {
    // Get existing cart items here
    const savedCart = localStorage.getItem('cart');
    const cartItems = savedCart ? JSON.parse(savedCart) : [];

    // Check if item already exists in cart and update quantity
    const existingItem = cartItems.find((item: Product) => item.id === product.id);

    if (existingItem) {
      // Update quantity if item exists 
      const updatedItems = cartItems.map((item: Product) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedItems));
    } else {
      // Add new item to cart
      const newItem = { ...product, quantity: 1 };
      localStorage.setItem('cart', JSON.stringify([...cartItems, newItem]));
    }

    // Show success message 
    alert('Item added to cart!');
  };

  return (
    <div className="group bg-black border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 sm:h-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 sm:p-6">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{product.name}</h3>
            <p className="text-gray-200 text-xs sm:text-sm">{product.description}</p>
            <div className="mt-4">
              <span className="text-lg sm:text-xl font-bold text-white">${product.price}</span>
            </div>
          </div>
        </div>
        <button 
          onClick={addToCart}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1.5 sm:p-2 bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black"
        >
          <ShoppingCartIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-3 w-3 sm:h-4 sm:w-4 ${
                  i < product.rating ? 'text-yellow-400' : 'text-gray-700'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-xs sm:text-sm text-gray-400">({product.reviews} reviews)</span>
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2 group-hover:text-gray-300 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg sm:text-xl font-bold text-white">${product.price}</span>
          <Link
            to={`/products/${product.id}`}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
} 