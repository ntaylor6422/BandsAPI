import Band from 'entity/Band';
import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateBandInput implements Partial<Band> {
  @Field()
  name: string;

  @Field()
  dateFormed: Date;
}
