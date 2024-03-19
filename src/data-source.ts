import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./modules/accounts/infra/typeorm/entities/User";
import { Category } from "./modules/cars/infra/typeorm/entities/Category";
import { Specification } from "./modules/cars/infra/typeorm/entities/Specification";
import { Car } from "./modules/cars/infra/typeorm/entities/Car";

const connectionSource: DataSourceOptions = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
  entities: [User, Category, Specification,Car],
};

export const dataSource = new DataSource(connectionSource);
