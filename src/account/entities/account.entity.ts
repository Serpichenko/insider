import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'total_years_subs' })
  totalYearSubs: number;

  @Column({ name: 'total_month_subs' })
  totalMonthSubs: number;

  @Column({ type: 'bigint' })
  balance: string;

  @ManyToOne(() => User, (user) => user.subscribers)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
