import { Injectable } from "@nestjs/common";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import PrismaGateway, {
  PrismaClientPostgres,
} from "../../shared/prisma/prisma.gateway";

const temporaryUsers = [
  { id: "1", name: "Diego" },
  { id: "2", name: "Diego" },
  { id: "3", name: "Diego" },
];

@Injectable()
export class UsersService {
  private readonly prismaPostgres: PrismaClientPostgres;
  constructor() {
    this.prismaPostgres = new PrismaGateway().getPrismaPostgres();
  }

  public async create(createUserInput: CreateUserInput) {
    return this.prismaPostgres.user.create({
      data: {
        name: createUserInput.name,
        email: createUserInput.email,
        password: createUserInput.password,
      },
    });
  }

  public async findAll() {
    return this.prismaPostgres.user.findMany();
  }

  public async findOne(id: string) {
    return this.prismaPostgres.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  public async update( updateUserInput: UpdateUserInput) {
    const { id, ...rest } = updateUserInput;
    return this.prismaPostgres.user.update({
      where: { id },
      data: {
        ...rest,
      },
    });
  }

  public async remove(id: string) {
    return this.prismaPostgres.user.delete({
      where: { id },
    });
  }
}
