import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import CreateCommentInput from '../inputs/CreateCommentInput';
import Comment from '../entity/Comment';

@Resolver()
export default class CommentResolver {
  @Query(() => [Comment])
  comments() {
    return Comment.find();
  }

  @Query(() => Band)
  band(@Arg('bandName') bandName: string) {
    return Band.findOne({ where: { bandName } });
  }

  @Mutation(() => Band)
  async createBand(@Arg('data') data: CreateBandInput) {
    // const date = new Date(data.dateFormed);
    const newBand = Band.create(data);
    await newBand.save();
    return newBand;
  }

  @Mutation(() => Band)
  async updateBand(
    @Arg('bandName') bandName: string,
    @Arg('data') data: UpdateBandInput
  ) {
    const updatedBand = await Band.findOne({ where: { bandName } });
    if (!updatedBand) throw new Error('Band not found');
    Object.assign(updatedBand, data);
    await updatedBand.save();
    return updatedBand;
  }

  @Mutation(() => Boolean)
  async deleteBand(@Arg('bandName') bandName: string) {
    const removedBand = await Band.findOne({ where: { bandName } });
    if (!removedBand) throw new Error('Band not found');
    await removedBand.remove();
    return true;
  }
}
