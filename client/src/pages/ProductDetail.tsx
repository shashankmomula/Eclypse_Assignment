import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import type { Product } from '../services/api';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import OutfitGenerator from '../components/OutfitGenerator';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        const data = await api.getProduct(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (!product) return;

    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading product details...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl">{error || 'Product not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white">{product.name}</h1>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <span className="text-yellow-400 text-xl">★</span>
                <span className="text-gray-400 ml-1">{product.rating}</span>
              </div>
              <span className="text-gray-400">({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl font-bold text-white">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-gray-400 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  -
                </button>
                <span className="px-4 py-2 text-white bg-gray-800">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  +
                </button>
              </div>

              <button
                onClick={addToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                Add to Cart
              </button>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-2">Category</h3>
              <p className="text-gray-400">{product.category}</p>
            </div>

            {/* Outfit Generator Section */}
            <OutfitGenerator
              productName={product.name}
              productDescription={product.description}
              productCategory={product.category}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 