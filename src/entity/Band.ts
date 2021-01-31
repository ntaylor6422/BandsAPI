import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bands')
export class Band {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  bandName: string;

  @Column()
  dateFormed: Date;
}
