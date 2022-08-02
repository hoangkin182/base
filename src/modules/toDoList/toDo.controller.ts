// import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
// import { TodoService } from "./toDo.service";

// @Controller('Todo')
// export class TodoController{
//     constructor(
//         private todoService: TodoService
//     ){}
//     @Get('get')
//     public  getAllListTodo(){
//         this.todoService.getAll()
//     }

//     @Post('create')
//     public createTodo(@Param()id:string, @Body()payload:any){
//         this.todoService.createTodo(id,payload)
//     }

//     @Put('update/:id')
//     public  updateTodo(@Param()id:string,@Body()payload:any){
//         this.todoService.updateTodo(id,payload)
//     }

//     @Get('get/:id')
//     public GetTodoById(@Param()id:string){
//         this.todoService.GetTodoById(id)
//     }

//     @Delete('delete/:id')
//     public delete(@Param()id:string){
//         this.todoService.delete(id)
//     }
// }