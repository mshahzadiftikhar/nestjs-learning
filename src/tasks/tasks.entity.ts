import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // This decorator marks the class as a database table
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
}
