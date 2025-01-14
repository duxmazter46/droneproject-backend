import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')  // Table name is 'users'
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;
}
