// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   BaseEntity,
//   JoinTable,
//   ManyToMany,
//   OneToMany,
// } from 'typeorm';
// import { ObjectType, Field } from 'type-graphql';
// import Band from './Band';
// import BandMember from './Band-Member';

// @Entity('members')
// @ObjectType()
// export default class Member extends BaseEntity {
//   @Field(() => String)
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Field(() => String)
//   @Column()
//   firstName: string;

//   @Field(() => String)
//   @Column()
//   lastName: string;

//   @Field(() => String)
//   @Column()
//   instrument: string;

//   @OneToMany(() => BandMember, (member) => member.band)
//   bands: Band[];

//   @Field(() => Date)
//   @Column()
//   birthDate: Date;
// }
