import { Injectable } from "@nestjs/common";
import { Comments } from "../entity/comments";
import PrismaGateway, { PrismaClientMongo } from "../../../shared/prisma/prisma.gateway";

@Injectable()
export class CommentsService {
  private readonly prismaMongo: PrismaClientMongo;
  constructor() {
    this.prismaMongo = new PrismaGateway().getPrismaMongo();
  }
  public async create(createCommentInput: Comments) {
    return this.prismaMongo.comment.create({
      data: {
        ...createCommentInput
      }
    });
  }
}
