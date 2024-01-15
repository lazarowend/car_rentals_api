import { Request, Response, Router } from 'express';
import { createCategoryController } from 'modules/cars/useCases/createCategory';
import { importCategoryController } from 'modules/cars/useCases/importCategory';
import { listCategoriesController } from 'modules/cars/useCases/listCategory';
import multer from 'multer';

const upload = multer({
  dest: './tmp',
});

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) => {
    return importCategoryController.handle(request, response);
  },
);

export { categoriesRoutes };
