import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './listCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(_request: Request, response: Response): Promise<Response> {
    try {
      const all = await this.listCategoriesUseCase.execute();
      return response.json({ all });
    } catch (error) {
      return response.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export { ListCategoriesController };
