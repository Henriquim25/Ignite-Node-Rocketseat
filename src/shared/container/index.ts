import { container } from "tsyringe";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoryRepository";
import { CategoryRepository } from "../../modules/cars/repositories/implementations/CategoryRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UserRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);
