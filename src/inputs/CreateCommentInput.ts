import { InputType, Field, ID } from 'type-graphql';
import Comment from '../entity/Comment';

@InputType()
export default class CreateCommentInput implements Partial<Comment> {
  @Field({ nullable: false })
  rating: number;

  @Field({ nullable: false })
  comment: string;

  @Field(() => ID)
  bandId: number;

  @Field(() => Date, { nullable: true })
  dateCommented: Date;
}
