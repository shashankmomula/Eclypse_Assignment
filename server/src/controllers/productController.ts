import { Request, Response } from 'express';
import { products, Product } from '../data/products';

export const getProducts = (req: Request, res: Response): void => {
  const { category, search, sort, featured, newArrival } = req.query;

  let filteredProducts = [...products];

  // Filter by category
  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(
      product => product.category === category
    );
  }

  // Search by name or description
  if (search) {
    const searchTerm = search.toString().toLowerCase();
    filteredProducts = filteredProducts.filter(
      product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by featured
  if (featured === 'true') {
    filteredProducts = filteredProducts.filter(product => product.featured);
  }

  // Filter by new arrival
  if (newArrival === 'true') {
    filteredProducts = filteredProducts.filter(product => product.newArrival);
  }

  // Sort products
  if (sort) {
    switch (sort) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sort by featured
        filteredProducts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }

  res.json(filteredProducts);
};

export const getProductById = (req: Request, res: Response) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

export const getFeaturedProducts = (req: Request, res: Response) => {
  const featuredProducts = products.filter(product => product.featured);
  res.json(featuredProducts);
};

export const getNewArrivals = (req: Request, res: Response) => {
  const newArrivals = products.filter(product => product.newArrival);
  res.json(newArrivals);
}; 