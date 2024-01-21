import { Specification } from '../model/Specifications';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Promise<Specification | null>;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
