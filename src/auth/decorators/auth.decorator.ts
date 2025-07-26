import { SetMetadata } from '@nestjs/common';
import { AuthTypes } from '../config/authTypes';

export const Auth = (...authTypes: AuthTypes[]) => SetMetadata('authType', authTypes);
