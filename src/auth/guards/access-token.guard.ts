import { CanActivate, ExecutionContext, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import jwtConfig from '../config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class AccessTokenGuard implements CanActivate {

  /**
   * This guard is used to protect routes that require a valid access token.
   * It checks if the request has a valid JWT access token in the Authorization header.
   */

  constructor(
    private readonly jwtService: JwtService,
    /**
     * Injecting the JwtService to handle JWT operations
     */
    @Inject(jwtConfig.KEY) private readonly jwtConfigure: ConfigType<typeof jwtConfig>
  ) { }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {

    /**
     * 1. grab the request object from the context
     * 2. extract the token from the Authorization header 
     * 3. verify the token using the JwtService
     * 4. if the token is valid, attach the user information to the request object
     */
    
    let request = context.switchToHttp().getRequest<Request>()
    const token = this.extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException("Please Login !")

    request["user"] = await this.jwtService.verifyAsync(token, this.jwtConfigure)

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [_, token] = request.headers.authorization?.split(' ') ?? [];
    return token;
  }
}
