import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import Band from '../entity/Band';

@Resolver()
export default class BandResolver {
  @Query(() => [Band])
  bands() {
    return Band.find();
  }

  @Query(() => Band)
  band(@Arg('id') id: string) {
    return Band.findOne({ where: { id } });
  }
}
