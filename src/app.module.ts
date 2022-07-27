import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import { AuthorizationGuard } from './modules/auth/authorization.guard';
import { CommonModule } from './common/common.module';
import { TodoModle } from './modules/toDoList/toDo.module';

@Module({
  imports: [
    CommonModule,
    AuthModule,
    TodoModle
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthorizationGuard,
    },
  ],
})
export class AppModule { }
