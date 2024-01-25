import { CategoriesRepository } from 'modules/cars/infra/repositories/CategoryRepository';
import { SpecificationRepository } from 'modules/cars/infra/repositories/SpecificationRepository';
import { ICategoriesRepository } from 'modules/cars/repositories/ICategoriesRepository';
import { ISpecificationsRepository } from 'modules/cars/repositories/ISpecificationsRepository';
import { container } from 'tsyringe';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationRepository,
);
