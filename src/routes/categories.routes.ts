import { Request, Response, Router } from 'express';
import { CategoriesRepository } from 'repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  response.status(201).send();
});

categoriesRoutes.get('/', (_request: Request, response: Response) => {
  const all = categoriesRepository.list();

  return response.json({ all });
});

export { categoriesRoutes };
