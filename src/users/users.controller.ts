import { Body, Controller, Get, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './providers/users.service';
import { AccessTokenGuard } from 'src/auth/guards/access-token.guard';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { AuthTypes } from 'src/auth/config/authTypes';


/**
 * this is user controller that operates users routing
 */

@Controller('users')
export class UsersController {
    /** 
     * This is the constructor for the UsersController.
     */

    constructor(
        // Injecting the UsersService to handle user-related operations
        private readonly usersService: UsersService
    ) { }

    @Post('/signup')
    @Auth(AuthTypes.None)
    async signup(@Body() body: UserDto) {
        // signup logic
        return this.usersService.signUpUser(body);
    }

  
    @Get("/me")
    async getMe() {
        // Logic to get the current user


        return "WORKS"
    }
}
