import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Comment } from './Comment';

@Entity('bands')
export class Band {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  bandName: string;

  @OneToMany((type) => Comment, (comment) => comment.band) comments: Comment[];

  @Field(() => Date)
  @Column()
  dateFormed: Date;
}
