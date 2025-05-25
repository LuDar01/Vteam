import { Test, TestingModule } from '@nestjs/testing';
import { ScooterController } from './scooter.controller';
import { ScooterService } from './scooter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scooter } from '../entities/scooter.entity';

describe('ScooterController', () => {
  let controller: ScooterController;

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
      controllers: [ScooterController],
      providers: [ScooterService],
    }).compile();

    controller = module.get<ScooterController>(ScooterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
