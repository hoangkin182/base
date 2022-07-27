import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { SysLoginUser } from 'src/database/entities/sys-login-user.entity';
// import { SysLoginUserRepository } from '../sys-login-user/sys-login-user.repository';
import { UserJwtDto } from './auth.dto';
import { UserRepository } from './user.repository';

export const USERNAME_OR_PASSWORD_IS_INCORRECT =
  'USERNAME_OR_PASSWORD_IS_INCORRECT';

@Injectable()
export class AuthService {
  constructor(
    private sysUserRepository: UserRepository,
    private jwtService: JwtService,
  ) { }

  public async login(username: string, password: string) {
    // const user = await this.sysUserRepository.getByUsername(username);

    // if (!user) {
    //   throw new UnauthorizedException(USERNAME_OR_PASSWORD_IS_INCORRECT);
    // }

    // const isMatch = await bcryptjs.compare(password, user.userPassword);
    // if (!isMatch) {
    //   throw new UnauthorizedException(USERNAME_OR_PASSWORD_IS_INCORRECT);
    // }

    // return this.encode(user);
  }

  public async profile() {
    return await this.sysUserRepository.findOne();
    // const me = await this.sysUserRepository.findOne(userId);
    // return me;
  }


  // private encode(user: SysLoginUser) {
  //   const token = this.generateToken(user);

  //   return {
  //     token,
  //     id: user.userID,
  //     userFullname: user.userFullname,
  //     isAdmin: user.isAdmin,
  //   };
  // }

  // private generateToken(user: SysLoginUser) {
  //   const payload: UserJwtDto = {
  //     userFullname: user.userFullname,
  //     id: user.userID,
  //     isAdmin: user.isAdmin,
  //   };
  //   return this.jwtService.sign(payload, {
  //     expiresIn: process.env.JWT_EXPIRES_IN,
  //   });
  // }

  public decode(token: string) {
    try {
      const jwt = token.replace('Bearer ', '');
      return this.jwtService.decode(jwt, { json: true }) as UserJwtDto;
    } catch (e) {
      return null;
    }
  }
}
