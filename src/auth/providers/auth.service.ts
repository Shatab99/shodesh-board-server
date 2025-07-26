import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { HashingService } from './hashing.service';

@Injectable()
export class AuthService {
    constructor(
        /**
         * This is the constructor for the AuthService.
         */
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

        /**
         * Injecting the HashingService to handle password hashing
         */
        @Inject()
        private readonly hashingService: HashingService

    ) { }

    async login(email: string, password: string): Promise<{ token: string }> {
        // Logic to validate user credentials
        const isUserExists = await this.userRepository.findOne({ where: { email } });
        if (!isUserExists) throw new BadRequestException('User does not exist');

        // Logic to compare password with hashed password
        const isPasswordValid = await this.hashingService.comparePasswords(password, isUserExists.password);
        if (!isPasswordValid) throw new BadRequestException('Invalid password');

        return { token: 'some-jwt-token' };
    }
}
