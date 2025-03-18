import { Mutation, Resolver, Args, Query } from "@nestjs/graphql";
import { CommentsService } from "./comments.service";
import { Comments } from "../entity/comments";
import { CreateCommentsInput } from "../dto/create-comments.input";

@Resolver(() => Comments )
export class CommentsResolver {
  constructor(private readonly commentsService: CommentsService) {}
  @Mutation(() => Comments)
  public async createComment(
    @Args("createCommentInput") createCommentInput: CreateCommentsInput,
  ) {
    return this.commentsService.create(createCommentInput);
  }

  @Query(() => [Comments])
  public async findAllComments() {
    return  this.commentsService.findAll();
  }
}
