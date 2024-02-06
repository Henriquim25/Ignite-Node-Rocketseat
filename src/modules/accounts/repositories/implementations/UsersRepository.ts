import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { Repository } from "typeorm";
import { User } from "../../entities/User";
import { dataSource } from "../../../../data-source";

class UserRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create({
    name,
    driver_license,
    password,
    email,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      driver_license,
      password,
      email,
    });
    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        id,
      },
    });
    return user;
  }
}

export { UserRepository };
