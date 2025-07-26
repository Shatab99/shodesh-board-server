import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class LoginDto {
    @ApiProperty({
        description: 'Email of the user',
        example: 'shatab@gmail.com'
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Password of the user',
        example: 'strongpassword123'
    })
    @IsString()
    password: string;
}