import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Station } from '../entities/station.entity';

@Injectable()
export class StationService {
  constructor(
    @InjectRepository(Station)
    private stationRepo: Repository<Station>,
  ) {}

  findAll(): Promise<Station[]> {
    return this.stationRepo.find();
  }

  findOne(id: number): Promise<Station | null> {
    return this.stationRepo.findOne({ where: { id } });
  }

  create(station: Partial<Station>): Promise<Station> {
    return this.stationRepo.save(station);
  }

  update(id: number, data: Partial<Station>): Promise<Station> {
    return this.stationRepo.save({ ...data, id });
  }

  remove(id: number): Promise<void> {
    return this.stationRepo.delete(id).then(() => {});
  }
}
