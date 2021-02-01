import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateBandInput {
  @Field()
  bandName: string;

  @Field()
  dateFormed: Date;
}
