import { Injectable } from "@nestjs/common";
import PrismaGateway, { PrismaClientMongo } from "../../../shared/prisma/prisma.gateway";
import { CreateCommentsInput } from "../dto/create-comments.input";

@Injectable()
export class CommentsService {
  private readonly prismaMongo: PrismaClientMongo;
  constructor() {
    this.prismaMongo = new PrismaGateway().getPrismaMongo();
  }

  public async create(createCommentInput: CreateCommentsInput) {
    return this.prismaMongo.comment.create({
      data: {
        ...createCommentInput
      }
    });
  }

  public async findAll(id: string) {
    return this.prismaMongo.comment.findMany({
      where: {
        id: id
      }
    });
  }
}
