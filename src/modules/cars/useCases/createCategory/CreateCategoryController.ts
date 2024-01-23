import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    try {
      const { name, description } = request.body;

      await createCategoryUseCase.execute({ name, description });

      return response.status(201).send();
    } catch (error) {
      console.error(error);

      return response.status(400).json({
        error: 'Category already exists',
      });
    }
  }
}

export { CreateCategoryController };
