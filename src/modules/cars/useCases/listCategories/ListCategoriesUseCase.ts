import { inject, injectable } from "tsyringe";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}
  async execute(): Promise<Category[]> {
    const list = await this.categoryRepository.list();
    return list;
  }
}

export { ListCategoriesUseCase };
