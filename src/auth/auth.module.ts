import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { HashingService } from './providers/hashing.service';
import { UsersModule } from 'src/users/users.module';
import { BcryptService } from './providers/bcrypt.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService,{
    provide: HashingService,
    useClass: BcryptService,
  } ],
  imports: [forwardRef(() => UsersModule)],
  exports: [AuthService, HashingService],
})
export class AuthModule { }
