import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Subscriber {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'subscriber_to' })
  subscriberTo: number;

  @ManyToOne(() => User, (user) => user.subscribers)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;
}
