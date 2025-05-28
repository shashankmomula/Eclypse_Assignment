export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
  newArrival: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Minimalist Dress',
    description: 'A sleek, contemporary design featuring clean lines and premium fabric, perfect for any occasion.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg',
    category: 'Modern Collection',
    rating: 4.9,
    reviews: 156,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    inStock: true,
    featured: true,
    newArrival: true
  },
  {
    id: '2',
    name: 'Designer Evening Gown',
    description: 'An exquisite floor-length gown with intricate detailing and a modern silhouette.',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1583333001978-8c57d752ce5b?q=80&w=1935&auto=format&fit=crop',
    category: 'Evening Wear',
    rating: 4.8,
    reviews: 203,
    sizes: ['S', 'M', 'L'],
    colors: ['Red', 'Black', 'Gold'],
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: '3',
    name: 'Contemporary Cocktail Dress',
    description: 'A sophisticated cocktail dress with asymmetric design and premium silk fabric.',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1612355576977-07116cdf8325?q=80&w=1976&auto=format&fit=crop',
    category: 'Cocktail Dresses',
    rating: 4.7,
    reviews: 178,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black', 'White'],
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: '4',
    name: 'Elegant Summer Dress',
    description: 'Light and flowy summer dress with floral patterns and delicate details.',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1733043014211-8d699f6a82b1?q=80&w=1974&auto=format&fit=crop&',
    category: 'Summer Collection',
    rating: 4.6,
    reviews: 142,
    sizes: ['S', 'M', 'L'],
    colors: ['Pink', 'Yellow', 'White'],
    inStock: true,
    featured: true,
    newArrival: false,
    discount: 15
  },
  {
    id: '5',
    name: 'Designer Party Dress',
    description: 'A stunning party dress with sequin details and modern cut.',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1705174962279-714cdbdd9a30?q=80&w=1968&auto=format&fit=crop',
    category: 'Party Wear',
    rating: 4.8,
    reviews: 167,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Silver', 'Black', 'Red'],
    inStock: true,
    featured: false,
    newArrival: true
  },
  {
    id: '6',
    name: 'Classic Black Dress',
    description: 'Timeless black dress with elegant silhouette and premium fabric.',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1723813196516-fc9dff5f8c0d?q=80&w=1974&auto=format&fit=crop',
    category: 'Classic Collection',
    rating: 4.7,
    reviews: 189,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black'],
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: '7',
    name: 'Classic White Kurta with Pajama for men',
    description: 'Traditional elegance ideal for festivals and family gatherings.',
    price: 349.99,
    image: 'https://plus.unsplash.com/premium_photo-1663045598312-9fa07783cfb3?q=80&w=1974&auto=format&fit=crop',
    category: 'Classic Collection',
    rating: 4.7,
    reviews: 189,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White'],
    inStock: true,
    featured: true,
    newArrival: false
  },
  {
    id: '8',
    name: 'Navy Blue Blazer',
    description: ' A sharp semi-formal look perfect for meetings or dinner dates.',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    category: 'Evening Wear',
    rating: 4.8,
    reviews: 203,
    sizes: ['S', 'M', 'L'],
    colors: ['Red', 'Black', 'Gold'], 
    inStock: true,
    featured: true,
    newArrival: false
  }
]; 
