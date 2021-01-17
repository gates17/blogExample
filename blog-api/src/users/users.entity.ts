/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
// pass the name of table inside @Entity() i.e "users", if you don't pass table name it will create "users_entity" table by default
@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 45,
  })
  username: string;
  
  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @Column({
    nullable: false,
    length: 45,
  })
  password: string;

  @Column({
    nullable: false,
    length: 45,
  })
  email: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({
    nullable: false,
  })
  date_created: Date;

  @Column({
    default: true,
  })
  active: boolean;
  
 
}