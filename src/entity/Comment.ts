import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Band } from './Band';

@Entity('comments')
export class Comment extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  comment: string;

  @ManyToOne((type) => Band, (band) => band.comments) band: Band;

  @Field(() => Date)
  @Column()
  dateFormed: Date;
}
