import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Scooter } from './scooter.entity';

@Entity()
export class Trip {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Scooter)
  scooter: Scooter;

  @Column({ type: 'datetime' })
  start_time: Date;

  @Column({ type: 'datetime' })
  end_time: Date;

  @Column('double')
  start_latitude: number;

  @Column('double')
  start_longitude: number;

  @Column('double')
  end_latitude: number;

  @Column('double')
  end_longitude: number;

  @Column({ type: 'decimal' })
  cost: number;
}
