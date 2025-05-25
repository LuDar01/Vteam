import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Scooter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  serial_number: string;

  @Column({ default: 'available' })
  status: 'available' | 'in_use' | 'charging' | 'maintenance';

  @Column({ type: 'int', default: 100 })
  battery_level: number;

  @Column({ default: true })
  is_locked: boolean;

  @Column({ default: false })
  needs_service: boolean;

  @Column('double', { nullable: true })
  latitude: number;

  @Column('double', { nullable: true })
  longitude: number;
}
