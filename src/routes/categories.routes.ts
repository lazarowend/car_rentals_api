import { Request, Response, Router } from 'express';
import { CreateCategoryController } from 'modules/cars/useCases/createCategory/CreateCategoryController';
import { importCategoryController } from 'modules/cars/useCases/importCategory';
import { listCategoriesController } from 'modules/cars/useCases/listCategory';
import multer from 'multer';

const upload = multer({
  dest: './tmp',
});

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

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
