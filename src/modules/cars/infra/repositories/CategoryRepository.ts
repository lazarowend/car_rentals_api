// Importando as dependências necessárias
import { prismaClient } from 'database/prismaClient';
import { Category } from 'modules/cars/model/Category';

import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from '../../repositories/ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  constructor() {}

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    await prismaClient.categories.create({
      data: {
        description,
        name,
      },
    });
  }

  async list(): Promise<Category[]> {
    const categories = await prismaClient.categories.findMany();
    return categories;
  }

  async findByName(name: string): Promise<Category | null> {
    const category = await prismaClient.categories.findFirst({
      where: {
        name,
      },
    });
    return category;
  }
}

// Exportando a classe do Repositório
export { CategoriesRepository };
