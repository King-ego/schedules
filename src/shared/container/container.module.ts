import { Module } from "@nestjs/common";
import { UsersModule } from "../../modules/user/users/users.module";
import { CommentsModule } from "../../modules/user/comments/comments.module";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [UsersModule, PrismaModule, CommentsModule],
})
export class ContainerModule {}
