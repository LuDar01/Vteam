import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Station {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('double')
  latitude: number;

  @Column('double')
  longitude: number;

  @Column()
  type: 'charging' | 'parking';
}
