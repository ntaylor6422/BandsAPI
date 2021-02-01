// import { Entity, Column, BaseEntity, PrimaryColumn, ManyToOne } from 'typeorm';
// import Band from './Band';
// import Member from './Member';

// @Entity()
// export default class BandMember extends BaseEntity {
//   @ManyToOne(() => Band, (band) => band.members)
//   band: Band;

//   @ManyToOne(() => Member, (member) => member.bands)
//   member: Member;

//   @PrimaryColumn('uuid')
//   bandsId: string;

//   @PrimaryColumn('uuid')
//   membersId: string;
// }
