import { DataSource, DataSourceOptions } from "typeorm";

const connectionSource: DataSourceOptions = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  migrations: ["./src/database/migrations/**/*.ts"],
};

export const dataSource = new DataSource(connectionSource);
