import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trip } from '../entities/trip.entity';

@Injectable()
export class TripService {
  constructor(
    @InjectRepository(Trip)
    private tripRepo: Repository<Trip>,
  ) {}

  findAll(): Promise<Trip[]> {
    return this.tripRepo.find({ relations: ['user', 'scooter'] });
  }

  findOne(id: number): Promise<Trip | null> {
    return this.tripRepo.findOne({
      where: { id },
      relations: ['user', 'scooter'],
    });
  }

  create(trip: Partial<Trip>): Promise<Trip> {
    return this.tripRepo.save(trip);
  }

  remove(id: number): Promise<void> {
    return this.tripRepo.delete(id).then(() => {});
  }
}
