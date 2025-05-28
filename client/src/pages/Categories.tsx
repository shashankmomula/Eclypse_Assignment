import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { api } from '../services/api';

interface Category {
  id: string;
  name: string;
  description: string;
  featured: boolean;
  imageUrl: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log('Fetching categories...');
        const data = await api.getCategories();
        console.log('Received categories:', data);
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen bg-black text-white flex items-center justify-center">{error}</div>;

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Shop by Category</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className="group relative h-[500px] rounded-lg overflow-hidden bg-black border border-gray-800"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-300 mb-2">{category.description}</p>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-4 py-2 bg-white text-black rounded-lg font-medium">
                      Explore Collection
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 