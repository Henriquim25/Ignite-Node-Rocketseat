import { Router, response } from "express";
import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../../../../modules/cars/useCases/listCategories/ListCategoriesController";
import multer from "multer";
import { ImportCategoryController } from "../../../../modules/cars/useCases/importCategory/ImportCategoryController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/",ensureAuthenticated,ensureAdmin, createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  ensureAuthenticated,
  ensureAuthenticated,
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
