import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { deleteFile } from "../../../../utils/file";

interface IRequest {
  user_id: string;
  avatar_File: string;
}

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUsersRepository
  ) {}
  async execute({ user_id, avatar_File }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatar_File;

    await this.usersRepository.create(user);
  }
}
