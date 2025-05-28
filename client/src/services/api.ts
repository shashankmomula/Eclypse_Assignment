


const API_URL = 'https://function-bun-production-14c7.up.railway.app/';
// http://localhost:3000/api

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

export interface Category {
  id: string;
  name: string;
  description: string;
  featured: boolean;
  imageUrl: string;
}

interface ProductParams {
  category?: string;
  search?: string;
  sort?: string;
  featured?: string;
  newArrival?: string;
}

export const api = {
  // Products
  getProducts: async (params?: ProductParams) => {
    const queryParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });
    }
    const response = await fetch(`${API_URL}/products?${queryParams.toString()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json() as Promise<Product[]>;
  },

  getProduct: async (id: string) => {
    const response = await fetch(`${API_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json() as Promise<Product>;
  },

  // Categories
  getCategories: async (featured?: boolean) => {
    const queryParams = new URLSearchParams();
    if (featured !== undefined) {
      queryParams.append('featured', featured.toString());
    }
    const response = await fetch(`${API_URL}/categories?${queryParams.toString()}`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json() as Promise<Category[]>;
  },

  getCategory: async (id: string) => {
    const response = await fetch(`${API_URL}/categories/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch category');
    }
    return response.json() as Promise<Category>;
  }
}; 