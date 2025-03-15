import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    console.log({ id: "1", name: createUserInput.name});
    return { id: "1", name: createUserInput.name}
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user, ${updateUserInput.id}`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
