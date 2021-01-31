import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import Band from './Band';

@Entity('comments')
@ObjectType()
export default class Comment extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  comment: string;

  @ManyToOne(() => Band, (band) => band.comments)
  band: Band;

  @Field(() => Date)
  @Column()
  dateFormed: Date;
}
