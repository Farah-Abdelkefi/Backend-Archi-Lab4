import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';



@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  salary: number;

  @Column()
  financialSituation: string;

  @Column()
  age: number;

  @Column()
  amount: string;

  @Column()
  otherloans: string;
}
