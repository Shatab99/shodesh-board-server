import { Injectable } from '@nestjs/common';
import { HashingService } from './hashing.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class BcryptService implements HashingService {
    public async hashPassword(password: string | Buffer): Promise<string> {

        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    comparePasswords(password: string | Buffer, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

}
