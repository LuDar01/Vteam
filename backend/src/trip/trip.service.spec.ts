import { Test, TestingModule } from '@nestjs/testing';
import { TripService } from './trip.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from '../entities/trip.entity';

describe('TripService', () => {
  let service: TripService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mariadb',
          host: 'localhost',
          port: 3306,
          username: 'scooter',
          password: 'scooterpass',
          database: 'scootersystem',
          entities: [Trip],
          synchronize: false,
        }),
        TypeOrmModule.forFeature([Trip]),
      ],
      providers: [TripService],
    }).compile();

    service = module.get<TripService>(TripService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
