import { Controller, Get, Body, Post, Param, Delete, Put } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './create-todo.dto';
import { TodoService } from './todos.service'
@Controller('todos')
export class TodoController {
    constructor(private todoService: TodoService) { }
    @Get()
    @Get('get')
    public  getAllListTodo(){
        return this.todoService.getAll()
    }
    @Post()
    addTodo(
        @Body() payload: CreateTodoDto
    ): any {
        return this.todoService.create(payload.name, payload.description)
    }
    @Put('update/:id')
    public  updateTodo(@Param('id')id:string,@Body()payload:UpdateTodoDto){
        if(!(id == null)){
            return this.todoService.updateTodo(id,payload)
        }
    }
    @Get('get/:id')
    public GetTodoById(@Param('id') id: string) {
        return this.todoService.GetTodoById(id)
    }
    @Delete('delete/:id')
    public delete(@Param("id") id: string) {
        return this.todoService.delete(id)
    }
}