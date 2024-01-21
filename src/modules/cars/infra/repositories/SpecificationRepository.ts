// Importando as dependências necessárias
import { prismaClient } from 'database/prismaClient';
import { Specification } from 'modules/cars/model/Specifications';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from 'modules/cars/repositories/ISpecificationsRepository';

// Implementando o Repositório sem Singleton
class SpecificationRepository implements ISpecificationsRepository {
  constructor() {}

  // Implementação dos métodos do repositório
  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    await prismaClient.categories.create({
      data: {
        description,
        name,
      },
    });
  }

  async findByName(name: string): Promise<Specification | null> {
    const category = await prismaClient.categories.findFirst({
      where: {
        name,
      },
    });
    return category;
  }
}

// Exportando a classe do Repositório
export { SpecificationRepository };
