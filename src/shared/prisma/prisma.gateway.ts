import { PrismaClient as PrismaClientMongo } from "../../../prisma/client/mongo";
import { PrismaClient as PrismaClientPostgres } from "../../../prisma/client/postgres";

export { PrismaClientMongo };
export { PrismaClientPostgres };

class PrismaGateway {
  private readonly prismaMongo: PrismaClientMongo;
  private readonly prismaPostgres: PrismaClientPostgres;
  constructor() {
    this.prismaMongo = new PrismaClientMongo();
    this.prismaPostgres = new PrismaClientPostgres();
  }

  public getPrismaMongo(): PrismaClientMongo {
    return this.prismaMongo;
  }

  public getPrismaPostgres(): PrismaClientPostgres {
    return this.prismaPostgres;
  }
}

export default PrismaGateway;
