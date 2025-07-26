import { BadRequestException, forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { HashingService } from './hashing.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config';

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
        private readonly hashingService: HashingService,
        /**
         * Injecting the JwtService to handle JWT operations
         */
        private readonly jwtService: JwtService,
        
        @Inject(jwtConfig.KEY)
        private readonly jwtConfigure : ConfigType<typeof jwtConfig>
    ) { }

    async login(email: string, password: string): Promise<{ token: string }> {
        // Logic to validate user credentials
        const isUserExists = await this.userRepository.findOne({ where: { email } });
        if (!isUserExists) throw new BadRequestException('User does not exist');

        // Logic to compare password with hashed password
        const isPasswordValid = await this.hashingService.comparePasswords(password, isUserExists.password);
        if (!isPasswordValid) throw new BadRequestException('Invalid password');

        const payload = { email: isUserExists.email, sub: isUserExists.id };
        const options = {
            audience: this.jwtConfigure.audience,
            issuer: this.jwtConfigure.issuer,
            expiresIn: this.jwtConfigure.accessTokenTtl,
        }
        const accessToken = await this.jwtService.signAsync(payload, options);

        return { token: accessToken };
    }
}
