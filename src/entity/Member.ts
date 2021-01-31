import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import Band from './Band';

@Entity('members')
@ObjectType()
export default class Member extends BaseEntity {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  instrument: string;

  @ManyToMany((type) => Band)
  @JoinTable()
  band: Band[];

  @Field(() => Date)
  @Column()
  birthDate: Date;
}
