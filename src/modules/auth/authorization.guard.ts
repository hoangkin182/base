import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from './auth.service';
import { AUTH_KEY, PermissionType } from './auth.decorator';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private reflector: Reflector, private authService: AuthService) { }

  checkValid<T>(requiredArray: T[], array: T[]) {
    let valid = true;
    requiredArray.forEach((require) => {
      valid = valid && array.includes(require);
    });
    return valid;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.get<PermissionType[]>(
      AUTH_KEY,
      context.getHandler(),
    );

    if (!requiredPermissions || requiredPermissions.length === 0) return true;

    try {
      const token = context.switchToHttp().getRequest().headers
        .authorization as string;

      const userJwt = this.authService.decode(token);
      if (!userJwt) {
        throw new UnauthorizedException();
      }

      if (userJwt.isAdmin === true) {
        return true;
      }
    } catch (e) {
      Logger.error(e);
      throw new UnauthorizedException();
    }
  }
}
