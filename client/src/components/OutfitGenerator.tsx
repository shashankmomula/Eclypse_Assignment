import { useState } from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

interface OutfitGeneratorProps {
  productName: string;
  productDescription: string;
  productCategory: string;
}

interface Accessory {
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function OutfitGenerator({ productName, productDescription, productCategory }: OutfitGeneratorProps) {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateOutfit = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log('Sending request with product:', { productName, productDescription, productCategory });
      
      const response = await fetch('http://localhost:3000/api/generate-outfit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName,
          productDescription,
          productCategory,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate outfit suggestions');
      }

      const data = await response.json();
      console.log('Received accessories from API:', data.accessories);
      setAccessories(data.accessories);
    } catch (err) {
      console.error('Error in generateOutfit:', err);
      setError('Failed to generate outfit suggestions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const AccessoryCard = ({ accessory, index }: { accessory: Accessory; index: number }) => {
    const [imageError, setImageError] = useState(false);

    return (
      <div
        key={index}
        className="flex gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
      >
        {/* {!imageError && accessory.image ? (
          <img
            src={accessory.image}
            alt={accessory.name}
            className="w-24 h-24 object-cover rounded-lg"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
            <SparklesIcon className="h-8 w-8 text-gray-500" />
          </div>
        )} */}
        <div>
          <h4 className="text-white font-medium mb-1">{accessory.name}</h4>
          <p className="text-gray-400 text-sm mb-2">{accessory.description}</p>
          <p className="text-white font-semibold">{accessory.price}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Complete Your Look</h3>
        <button
          onClick={generateOutfit}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SparklesIcon className="h-5 w-5" />
          {loading ? 'Generating...' : 'Generate Outfit'}
        </button>
      </div>

      {error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      {/* console.log(accessories); */}
      {accessories.length > 0 && (
        <div className="space-y-4">
          <p className="text-gray-400">Suggested accessories to complete your look:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {accessories.map((accessory, index) => (
              <AccessoryCard key={index} accessory={accessory} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 