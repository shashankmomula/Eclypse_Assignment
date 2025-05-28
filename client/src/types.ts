export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  quantity?: number;
}

export type CartItem = Product & {
  quantity: number;
}; 