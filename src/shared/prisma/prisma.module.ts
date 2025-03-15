import { Module } from "@nestjs/common";
import { PrismaPostgresService } from "./prisma-postgres.service";
import { PrismaMongoService } from "./prisma-mongo.service";

@Module({
    providers: [PrismaPostgresService, PrismaMongoService],
})
export class PrismaModule {}
