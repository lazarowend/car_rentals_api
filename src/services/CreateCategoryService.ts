import { CategoriesRepository } from 'repositories/CategoriesRepository';
import { ICategoriesRepository } from 'repositories/ICategoriesRepository';

interface IResquest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IResquest): void {
    const categoriesRepository = new CategoriesRepository();
    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
