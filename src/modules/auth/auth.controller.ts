import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserReq } from 'src/common/decorators/user.decorator';
import { LoginDto, UserJwtDto } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  public async login(@Body() payload: LoginDto) {
    return await this.authService.login(payload.username, payload.userPassword);
  }

  @Get('me')
  @ApiOperation({ summary: 'Login' })
  public async me() {
    console.log('222222222222222222222222');
    
    return await this.authService.profile();
  }
}
