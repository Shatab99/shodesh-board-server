import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { UserDto } from '../dtos/user.dto';
import { HashingService } from 'src/auth/providers/hashing.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

        /**
         * inject hashing service
         */
        @Inject(forwardRef(() => HashingService))
        private readonly hashingService: HashingService

    ) { }

    public async signUpUser(user: UserDto) {
        const existingUser = await this.userRepository.findOne({ where: { email: user.email } });
        if (existingUser) throw new BadRequestException('User already exists');

        // Hash the password before saving
        user.password = await this.hashingService.hashPassword(user.password);

        const newUser = this.userRepository.create(user);
        await this.userRepository.save(newUser);
        return { success: true, message: 'User created successfully' };
    }

    public async getMe(payload: { sub: number, email: string }) {
        return await this.userRepository.findOne({ where: { id: payload.sub } });
    }
}
