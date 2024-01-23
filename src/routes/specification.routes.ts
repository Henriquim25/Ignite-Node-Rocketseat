import { Router, response } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationRoutes.get("/", (request, response) => {
  const list = specificationRepository.list();
  return response.status(201).json(list);
});

export { specificationRoutes };
