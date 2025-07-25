
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class UserDto {
    @ApiProperty({
        description: 'Unique identifier for the user',
        example: 'shatab@gmail.com'
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Name of the user',
        example: 'Shatab'
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Password of the user',
        example: 'strongpassword123'
    })
    @IsString()
    password: string;

    @ApiProperty({
        description: 'Contact number of the user',
        example: '+88 1234567890',
    })
    @IsString()
    contactNumber: string;
}