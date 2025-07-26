import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { AccessTokenGuard } from './access-token.guard';
import { AuthTypes } from '../config/authTypes';

@Injectable()
export class AuthenticationGuardGuard implements CanActivate {

  private static readonly defaultType = AuthTypes.Bearer
  private readonly authGuardMap: Record<AuthTypes, CanActivate | CanActivate[]>;

  constructor(
    // You can inject any required services here
    private readonly reflectior: Reflector,
    private readonly accessTokenGuard: AccessTokenGuard
    
  ) {
    this.authGuardMap = {
      [AuthTypes.Bearer]: this.accessTokenGuard,
      [AuthTypes.None]: { canActivate: () => true }
    };
  }


  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}
