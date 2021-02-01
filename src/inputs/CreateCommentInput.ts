import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateCommentInput {
  @Field({ nullable: false })
  rating: number;

  @Field({ nullable: false })
  comment: string;
}
