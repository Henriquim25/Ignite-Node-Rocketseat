import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import {  ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });
  it("should be able to list all avaiable cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: " Description Car1",
      daily_rate: 125,
      license_plate: " ABCD-123",
      fine_amount: 100,
      brand: " Brand Car1",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: " Description Car1",
      daily_rate: 125,
      license_plate: " ABCD-123",
      fine_amount: 100,
      brand: "Brand Car Test",
      category_id: "category_id",
    });
    const cars = await listAvailableCarsUseCase.execute({
      name: "Car2",
    });
    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: " Description Car1",
      daily_rate: 125,
      license_plate: " ABCD-123",
      fine_amount: 100,
      brand: "Brand Car Test",
      category_id: "category_id",
    });
    const cars = await listAvailableCarsUseCase.execute({
      brand: "Brand CarTest",
    });
    expect(cars).toEqual([car]);
  });
  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: " Description Car1",
      daily_rate: 125,
      license_plate: " ABCD-123",
      fine_amount: 100,
      brand: "Brand Car Test",
      category_id: "123",
    });
    const cars = await listAvailableCarsUseCase.execute({
      category_id: "123",
    });
    expect(cars).toEqual([car]);
  });
});
