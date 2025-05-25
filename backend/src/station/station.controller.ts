import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { StationService } from './station.service';
import { Station } from '../entities/station.entity';

@Controller('stations')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Get()
  findAll(): Promise<Station[]> {
    return this.stationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Station | null> {
    return this.stationService.findOne(+id);
  }

  @Post()
  create(@Body() station: Partial<Station>): Promise<Station> {
    return this.stationService.create(station);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<Station>): Promise<Station> {
    return this.stationService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.stationService.remove(+id);
  }
}
