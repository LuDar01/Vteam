import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { TripService } from './trip.service';
import { Trip } from '../entities/trip.entity';

@Controller('trips')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Get()
  findAll(): Promise<Trip[]> {
    return this.tripService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Trip | null> {
    return this.tripService.findOne(+id);
  }

  @Post()
  create(@Body() trip: Partial<Trip>): Promise<Trip> {
    return this.tripService.create(trip);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.tripService.remove(+id);
  }
}
