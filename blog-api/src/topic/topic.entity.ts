/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn } from 'typeorm';
import * as crypto from 'crypto';
// pass the name of table inside @Entity() i.e "users", if you don't pass table name it will create "users_entity" table by default
@Entity('topic')
export class TopicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 45,
  })
  name: string;
  
  @CreateDateColumn({
    nullable: false,
  })
  date_created: Date;

  @CreateDateColumn({
    nullable: true,
  })
  date_updated: Date;

  @Column({
    default: true,
  })
  status: boolean;
  
 
}