import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scooter } from '../entities/scooter.entity';
import { ScooterService } from './scooter.service';
import { ScooterController } from './scooter.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Scooter])],
  controllers: [ScooterController],
  providers: [ScooterService],
})
export class ScooterModule {}
