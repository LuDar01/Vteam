import { Test, TestingModule } from '@nestjs/testing';
import { ScooterService } from './scooter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scooter } from '../entities/scooter.entity';

describe('ScooterService', () => {
  let service: ScooterService;

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
          entities: [Scooter],
          synchronize: false,
        }),
        TypeOrmModule.forFeature([Scooter]),
      ],
      providers: [ScooterService],
    }).compile();

    service = module.get<ScooterService>(ScooterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
