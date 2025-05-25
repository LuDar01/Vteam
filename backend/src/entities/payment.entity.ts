import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @Column({ type: 'decimal' })
  amount: number;

  @Column()
  method: 'prepaid' | 'monthly';

  @CreateDateColumn()
  timestamp: Date;
}
