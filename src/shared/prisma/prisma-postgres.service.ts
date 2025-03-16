import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "../../../prisma/client/postgres";

@Injectable()
export class PrismaPostgresService
    extends PrismaClient
    implements OnModuleInit
{
    async onModuleInit() {
        await this.$connect();
        console.log("Prisma connected to Postgres");
    }
}
