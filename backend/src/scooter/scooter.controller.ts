import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ScooterService } from './scooter.service';
import { Scooter } from '../entities/scooter.entity';

@Controller('scooters')
export class ScooterController {
  constructor(private readonly scooterService: ScooterService) {}

  @Get()
  findAll(): Promise<Scooter[]> {
    return this.scooterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Scooter | null> {
    return this.scooterService.findOne(+id);
  }

  @Post()
  create(@Body() scooter: Partial<Scooter>): Promise<Scooter> {
    return this.scooterService.create(scooter);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<Scooter>): Promise<Scooter> {
    return this.scooterService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.scooterService.remove(+id);
  }
}
