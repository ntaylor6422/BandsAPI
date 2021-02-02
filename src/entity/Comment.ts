import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
  RelationId,
} from 'typeorm';
import { ObjectType, Field, Int, ID } from 'type-graphql';
import Band from './Band';

@Entity('comments')
@ObjectType()
export default class Comment extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field(() => Int)
  @Column()
  rating: number;

  @Field(() => String)
  @Column()
  comment: string;

  @Field(() => Band)
  @ManyToOne(() => Band)
  band: Band;
  @RelationId((comment: Comment) => comment.band)
  bandId: number;

  @Field(() => Date)
  @Column()
  dateCommented: Date;
}
