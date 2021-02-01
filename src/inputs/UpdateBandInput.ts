import { InputType, Field } from 'type-graphql';

@InputType()
export default class UpdateBandInput {
  @Field({ nullable: false })
  bandName: string;

  @Field({ nullable: false })
  dateFormed: Date;
}
