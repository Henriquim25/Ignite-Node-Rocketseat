import { ICreateCarDTO } from "src/modules/cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";
import { dataSource } from "../../../../../data-source";
import { Repository } from "typeorm";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;
  constructor() {
    this.repository = dataSource.getRepository(Car);
  }
  async findAvailable(
    brand?: string,
    category_id?: string,
    name?: string
  ): Promise<Car[]> {
    const carsQuery = await this.repository
      .createQueryBuilder("c")
      .where("available = :available", { available: true });

    if (brand) {
      carsQuery.andWhere("c.brand = :brand", { brand });
    }
    if (name) {
      carsQuery.andWhere("c.name = :name", { name });
    }
    if (category_id) {
      carsQuery.andWhere("c.category_id = :category_id", { category_id });
    }

    const cars =await carsQuery.getMany();
    return cars
  }
  async create({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    await this.repository.save(car);
    return car;
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({
      where: {
        license_plate: license_plate,
      },
    });
    return car;
  }
}

export { CarsRepository };
