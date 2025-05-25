import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 'customer' })
  role: 'customer' | 'admin';

  @Column({ type: 'decimal', default: 0.00 })
  prepaid_balance: number;

  @CreateDateColumn()
  created_at: Date;
}
