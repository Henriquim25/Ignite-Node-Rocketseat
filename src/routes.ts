import { Request, Response } from "express";
import CreateCourseService from "./create-course-service";

export function createCouse(request: Request, respose: Response) {
  CreateCourseService.execute({
    name: "Henrique",
    educator: "alo",
    duration: 123,
  });

  return respose.send();
}
