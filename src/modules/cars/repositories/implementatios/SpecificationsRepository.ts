import { Specification } from '../../model/Specifications';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static ISNTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getIstance(): SpecificationsRepository {
    if (!SpecificationsRepository.ISNTANCE) {
      SpecificationsRepository.ISNTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.ISNTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      create_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name,
    );

    return specification;
  }
}

export { SpecificationsRepository };
