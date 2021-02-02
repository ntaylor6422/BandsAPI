import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import Comment from './Comment';
import { Lazy } from '../helper';

@Entity('bands')
@ObjectType()
export default class Band extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => [Comment])
  @OneToMany(() => Comment, (comment) => comment.band, {
    lazy: true,
    cascade: ['insert'],
  })
  comments: Lazy<Comment[]>;

  @Field(() => Date)
  @Column()
  dateFormed: Date;
}
