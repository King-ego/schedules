import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UsersService } from "./users.service";
import { CreateUserInput } from "./dto/create-user.input";
import { UpdateUserInput } from "./dto/update-user.input";
import { User } from "./entities/user.entity";

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  public async createUser(
    @Args("createUserInput") createUserInput: CreateUserInput,
  ) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User])
  public async findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  public async findOne(@Args("id") id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  public async update(@Args("updateUserInput") updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => User)
  public async remove(@Args("id") id: string) {
    return this.usersService.remove(id);
  }
}
