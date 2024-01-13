import { Request, Response, Router } from 'express';
import { Category } from 'model/Category';
import { v4 as uuidv4 } from 'uuid';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const category: Category = {
    id: uuidv4(),
    name,
    description,
    created_at: new Date(),
  };

  categories.push(category);
  response.status(201).json(category);
});

export { categoriesRoutes };
