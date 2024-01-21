import { Category } from 'modules/cars/model/Category';
import { ICategoriesRepository } from 'modules/cars/repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute(): Promise<Category[]> {
    const categories = this.categoryRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
