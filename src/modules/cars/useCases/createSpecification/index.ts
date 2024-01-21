import { SpecificationRepository } from 'modules/cars/infra/repositories/SpecificationRepository';

import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationRepository = new SpecificationRepository();
const createSpecifictionUseCase = new CreateSpecificationUseCase(
  specificationRepository,
);
const createSpecificationController = new CreateSpecificationController(
  createSpecifictionUseCase,
);

export { createSpecificationController };
