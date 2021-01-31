import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Band } from './Band';

@Entity('members')
@ObjectType()
export class Member extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @ManyToMany((type) => Band)
  @JoinTable()
  band: Band[];

  @Field(() => Date)
  @Column()
  dateFormed: Date;
}
