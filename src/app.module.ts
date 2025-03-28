import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ContainerModule } from "./shared/container/container.module";
import { PrismaMongoService } from './shared/prisma/prisma-mongo.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    ContainerModule,
  ],
})
export class AppModule {}
