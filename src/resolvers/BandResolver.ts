import CreateBandInput from '../inputs/CreateBandInput';
import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import Band from '../entity/Band';
import UpdateBandInput from '../inputs/UpdateBandInput';

@Resolver()
export default class BandResolver {
  @Query(() => [Band])
  bands() {
    return Band.find();
  }

  @Query(() => Band)
  band(@Arg('name') name: string) {
    return Band.findOne({ where: { name } });
  }

  @Mutation(() => Band)
  async createBand(@Arg('data') data: CreateBandInput) {
    const newBand = Band.create(data);
    await newBand.save();
    return newBand;
  }

  @Mutation(() => Band)
  async updateBand(
    @Arg('name') name: string,
    @Arg('data') data: UpdateBandInput
  ) {
    const updatedBand = await Band.findOne({ where: { name } });
    if (!updatedBand) throw new Error('Band not found');
    Object.assign(updatedBand, data);
    await updatedBand.save();
    return updatedBand;
  }

  @Mutation(() => Boolean)
  async deleteBand(@Arg('name') name: string) {
    const removedBand = await Band.findOne({ where: { name } });
    if (!removedBand) throw new Error('Band not found');
    await removedBand.remove();
    return true;
  }
}
