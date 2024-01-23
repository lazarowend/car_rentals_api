import { CategoriesRepository } from 'modules/cars/infra/repositories/CategoryRepository';
import { ICategoriesRepository } from 'modules/cars/repositories/ICategoriesRepository';
import { container } from 'tsyringe';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);
