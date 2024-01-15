import { SpecificationsRepository } from 'modules/cars/repositories/implementatios/SpecificationsRepository';

import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = new SpecificationsRepository();
const createSpecifictionUseCase = new CreateSpecificationUseCase(
  specificationRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecifictionUseCase,
);

export { createSpecificationController };
