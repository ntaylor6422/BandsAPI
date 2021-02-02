import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { Repository, getRepository } from 'typeorm';
import CreateCommentInput from '../inputs/CreateCommentInput';
import Comment from '../entity/Comment';
import Band from '../entity/Band';

@Resolver()
export default class CommentResolver {
  protected commentRepository: Repository<Comment>;
  protected bandRepository: Repository<Band>;

  constructor() {
    this.commentRepository = getRepository(Comment);
    this.bandRepository = getRepository(Band);
  }

  @Query(() => [Comment])
  comments() {
    return Comment.find();
  }

  @Mutation(() => Comment)
  async createComment(@Arg('data') data: CreateCommentInput): Promise<Band> {
    const band = await this.bandRepository.findOne(data.bandId);
    (await band.comments).push(
      this.commentRepository.create({
        band,
        ...data,
        dateCommented: new Date(),
      })
    );
    return await this.bandRepository.save(band);
  }
}
