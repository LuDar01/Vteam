import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ScooterModule } from './scooter/scooter.module';
import { TripModule } from './trip/trip.module';
import { StationModule } from './station/station.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
      ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USER || 'scooter',
      password: process.env.DB_PASS || 'scooterpass',
      database: process.env.DB_NAME || 'scootersystem',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    ScooterModule,
    TripModule,
    StationModule,
    AuthModule,
  ],
})


export class AppModule {}
console.log('DB_PORT from env:', process.env.DB_PORT);

