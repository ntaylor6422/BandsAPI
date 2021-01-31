import { Resolver, Query } from 'type-graphql';

@Resolver()
export class BandResolver {
  @Query(() => String)
  hello() {
    return 'world';
  }
}
