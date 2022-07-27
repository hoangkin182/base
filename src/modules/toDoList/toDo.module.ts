import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoEntity } from "src/database/entities/to-do.entity";
import { TodoController } from "./toDo.controller";
import { TodoService } from "./toDo.service";

@Module({
    imports: [TypeOrmModule.forFeature([TodoEntity])],
    controllers:[TodoController],
    providers: [TodoService],
    exports: [TodoService]
})

export class TodoModle{}