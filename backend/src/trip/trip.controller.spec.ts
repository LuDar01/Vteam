import { Test, TestingModule } from '@nestjs/testing';
import { TripController } from './trip.controller';
import { TripService } from './trip.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trip } from '../entities/trip.entity';

describe('TripController', () => {
  let controller: TripController;

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
      controllers: [TripController],
      providers: [TripService],
    }).compile();

    controller = module.get<TripController>(TripController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
