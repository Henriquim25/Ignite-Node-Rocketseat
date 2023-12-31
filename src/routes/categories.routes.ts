import { Router, response } from 'express';
import { CategoryRepository } from '../modules/cars/repositories/CategoryRepository';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoryRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const list = categoryRepository.list();
  return response.status(201).json(list);
});

export { categoriesRoutes };
