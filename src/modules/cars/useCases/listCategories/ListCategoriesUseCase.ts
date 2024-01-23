import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}
  execute(): Category[] {
    const list = this.categoryRepository.list();
    return list;
  }
}

export { ListCategoriesUseCase };
