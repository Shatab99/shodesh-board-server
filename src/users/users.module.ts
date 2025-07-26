import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './providers/users.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User]),
  forwardRef(() => AuthModule)
  ],
  providers: [UsersService],
  exports: [UsersService, UsersModule, TypeOrmModule],
})
export class UsersModule { }
