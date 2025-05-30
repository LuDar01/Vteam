import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<User | null> {
        return this.userRepository.findOne({ where: { id } });
        }


    create(user: Partial<User>): Promise<User> {
        return this.userRepository.save(user);
    }

    remove(id: number): Promise<void> {
        return this.userRepository.delete(id).then(() => {});
    }
}
