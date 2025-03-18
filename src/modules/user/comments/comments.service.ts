import { Injectable } from "@nestjs/common";
import PrismaGateway, {
  PrismaClientMongo,
} from "../../../shared/prisma/prisma.gateway";
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
        content: createCommentInput.content,
        author_id: createCommentInput.author_id,
      },
    });
  }

  public async findAll() {
    return this.prismaMongo.comment.findMany();
  }
}
