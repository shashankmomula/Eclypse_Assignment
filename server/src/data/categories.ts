export interface Category {
  id: string;
  name: string;
  description: string;
  featured: boolean;
  imageUrl: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Modern Collection',
    description: 'Discover our contemporary dresses with clean lines and modern aesthetics',
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg'
  },
  {
    id: '2',
    name: 'Evening Wear',
    description: 'Explore our stunning collection of evening gowns and formal dresses',
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg'
  },
  {
    id: '3',
    name: 'Cocktail Dresses',
    description: 'Find the perfect cocktail dress for your special occasions',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1652501060301-a271a3492d95?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '4',
    name: 'Summer Collection',
    description: 'Light and breezy dresses perfect for summer days',
    featured: false,
    imageUrl: 'https://images.unsplash.com/photo-1632537593914-c19c2716ffca?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Party Wear',
    description: 'Make a statement with our stunning party dresses',
    featured: true,
    imageUrl: 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Classic Collection',
    description: 'Timeless dresses that never go out of style',
    featured: true,
    imageUrl: 'https://images.pexels.com/photos/1598502/pexels-photo-1598502.jpeg'
  }
]; 