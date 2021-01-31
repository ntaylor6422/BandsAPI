import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  BaseEntity,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Comment } from './Comment';

@Entity('bands')
@ObjectType()
export default class Band extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  bandName: string;

  @OneToMany(() => Comment, (comment) => comment.band)
  comments: Comment[];

  @Field(() => Date)
  @Column()
  dateFormed: Date;
}
