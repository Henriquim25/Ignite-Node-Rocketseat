import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./modules/accounts/entities/User";
import { Category } from "./modules/cars/entities/Category";
import { Specification } from "./modules/cars/entities/Specification";

const connectionSource: DataSourceOptions = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  migrations: ["./src/database/migrations/*.ts"],
  entities: [User, Category, Specification],
};

export const dataSource = new DataSource(connectionSource);
