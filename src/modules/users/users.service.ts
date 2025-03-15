import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";

const temporaryUsers = [
    { id: "1", name: "Diego" },
    { id: "2", name: "Diego" },
    { id: "3", name: "Diego" },
]

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    console.log({ id: "1", name: createUserInput.name });
    return temporaryUsers[0];
  }

  findAll() {
    return temporaryUsers;
  }

  findOne(id: string) {
    console.log(`This action returns a #${id} user`);
    return temporaryUsers[0];
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    console.log(`This action updates a #${id} user, ${updateUserInput.id}`);
    return temporaryUsers[0];
  }

  remove(id: string) {
    return temporaryUsers[0];
  }
}
