import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Product, Category } from '../services/api';
import ProductCard from '../components/ProductCard';
import { redDress, heroVideo } from '../assets';
import { api } from '../services/api';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const featuredData = await api.getProducts({ featured: 'true' });
        setFeaturedProducts(featuredData);

        const categoriesData = await api.getCategories();
        setCategories(categoriesData);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh]">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
            <img
              src={redDress}
              alt="Fashion Hero"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-white drop-shadow-lg">
              Elegance in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
                Every Thread
              </span>
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300 font-medium drop-shadow-md">
              Discover our curated collection of timeless fashion pieces that define modern elegance.
            </p>
            <Link
              to="/products"
              className="inline-block bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="py-12 sm:py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden bg-black border border-gray-800"
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 sm:py-16 bg-black text-white border-t border-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join Our Fashion Community</h2>
          <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Subscribe to receive updates on new collections, exclusive offers, and fashion insights.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4 px-4 sm:px-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 sm:py-3 rounded-lg bg-gray-900/50 text-white border border-gray-800 focus:outline-none focus:border-gray-700 placeholder-gray-500 transition-colors duration-200 text-sm sm:text-base"
            />
            <button  
              type="submit"
              className="px-6 py-2 sm:py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
} 