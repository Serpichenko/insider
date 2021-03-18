import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Subscriber } from '../../subscriber/entities/subscriber.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column({ type: 'bigint' })
  accountId: string;

  @Column()
  userToken: string;

  @Column({ default: true })
  isAdmin: boolean;

  @Column()
  paylink: string;

  @Column({ type: 'double' })
  subscribecost: string;

  @OneToMany(() => Subscriber, (subscriber) => subscriber.user)
  subscribers: Subscriber[];
}
