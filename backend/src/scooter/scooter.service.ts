import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scooter } from '../entities/scooter.entity';

@Injectable()
export class ScooterService {
  constructor(
    @InjectRepository(Scooter)
    private scooterRepo: Repository<Scooter>,
  ) {}

  findAll(): Promise<Scooter[]> {
    return this.scooterRepo.find();
  }

  findOne(id: number): Promise<Scooter | null> {
    return this.scooterRepo.findOne({ where: { id } });
  }

  create(scooter: Partial<Scooter>): Promise<Scooter> {
    return this.scooterRepo.save(scooter);
  }

  update(id: number, data: Partial<Scooter>): Promise<Scooter> {
    return this.scooterRepo.save({ ...data, id });
  }

  remove(id: number): Promise<void> {
    return this.scooterRepo.delete(id).then(() => {});
  }
}
