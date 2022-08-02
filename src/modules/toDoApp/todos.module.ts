import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todos.controllers';
import { TodoRepository } from './todos.repository';
import { TodoService } from './todos.service';

@Module({
    imports: [ConfigModule.forRoot(),
    TypeOrmModule.forFeature([TodoRepository]),],
    controllers: [TodoController],
    providers: [TodoService],
    exports: [TodoService]
})
export class TodosModule { }