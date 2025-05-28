import { Request, Response } from 'express';
import { categories, Category } from '../data/categories';

export const getCategories = (req: Request, res: Response) => {
  const { featured } = req.query;

  if (featured === 'true') {
    const featuredCategories = categories.filter((category: Category) => category.featured);
    res.json(featuredCategories);
  } else {
    res.json(categories);
  }
};

export const getCategoryById = (req: Request, res: Response) => {
  const category = categories.find((c: Category) => c.id === req.params.id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
}; 