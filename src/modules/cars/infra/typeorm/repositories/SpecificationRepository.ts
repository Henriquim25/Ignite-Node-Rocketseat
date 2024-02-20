import { Repository } from "typeorm";
import { Specification } from "../entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../../../repositories/ISpecificationRepository";
import { dataSource } from "../../../../../data-source";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;
  constructor() {
    this.repository = dataSource.getRepository(Specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({
      where: {
        name,
      },
    });
    return specification;
  }
  async create({ name, description }: ICreateSpecificationDTO) {
    const specification = this.repository.create({
      name,
      description,
    });
    await this.repository.save(specification);
  }
  async list(): Promise<Specification[]> {
    const all = await this.repository.find();
    return all;
  }
}
export { SpecificationRepository };
