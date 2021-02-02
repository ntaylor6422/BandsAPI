import Band from 'entity/Band';
import { InputType, Field } from 'type-graphql';

@InputType()
export default class UpdateBandInput implements Partial<Band> {
  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  dateFormed: Date;
}
