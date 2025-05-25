import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async validateOAuthLogin(email: string, name: string) {
  let user = await this.userRepo.findOne({ where: { email } });

  if (!user) {
    user = await this.userRepo.save({
      email,
      password: '',
      role: 'customer',
      prepaid_balance: 0,
    });
  }

  const payload = { sub: user.id, email: user.email };
  return {
    access_token: this.jwtService.sign(payload),
  };
}

}
