import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './providers/users.service';


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
    async signup(@Body() body: UserDto) {
        // signup logic
        return this.usersService.signUpUser(body);
    }
}
