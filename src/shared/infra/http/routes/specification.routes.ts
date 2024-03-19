import { Router, response } from "express";
import { SpecificationRepository } from "../../../../modules/cars/infra/typeorm/repositories/SpecificationRepository";
import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const specificationRoutes = Router();
const specificationRepository = new SpecificationRepository();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
);

export { specificationRoutes };
