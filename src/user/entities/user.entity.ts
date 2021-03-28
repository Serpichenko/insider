import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

import { Subscriber } from '../../subscriber/entities/subscriber.entity';
import { Account } from '../../account/entities/account.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'account_id', type: 'bigint' })
  accountId: string;

  @Column({ name: 'user_token' })
  userToken: string;

  @Column({ name: 'is_admin', default: true })
  isAdmin: boolean;

  @Column()
  paylink: string;

  @Column({ type: 'double' })
  subscribecost: string;

  @OneToMany(() => Subscriber, (subscriber) => subscriber.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  subscribers: Subscriber[];

  @OneToMany(() => Account, (account) => account.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'user_id' })
  accounts: Account[];
}
