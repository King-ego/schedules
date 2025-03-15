import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../../../prisma/client/mongo";

@Injectable()
export class PrismaMongoService extends PrismaClient implements OnModuleInit{
    async onModuleInit() {
        await this.$connect();
        console.log("Prisma connected to MongoDB");
    }
}
