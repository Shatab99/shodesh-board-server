import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginDto } from './dtos/auth.dto';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
    /**
     * This is the constructor for the AuthController.
     * It injects the AuthService to handle authentication-related operations.
     */
    constructor(private readonly authService: AuthService) { }


    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() loginDto: LoginDto): Promise<any> {
        // Logic to handle user login
        const { email, password } = loginDto;
        return this.authService.login(email, password);
    }
}
