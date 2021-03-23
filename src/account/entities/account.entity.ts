import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  totalYearSubs: number;

  @Column()
  totalMonthSubs: number;

  @Column({ type: 'bigint' })
  balance: string;

  @ManyToOne(() => User, (user) => user.subscribers)
  user: User;
}
