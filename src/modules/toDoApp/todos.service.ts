import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TodoRepository } from './todos.repository';
import { Guid } from 'guid-typescript';
import { UpdateTodoDto } from './create-todo.dto';

@Injectable()
export class TodoService {
    todosDb: any;
    constructor(
        private todoRepository: TodoRepository,
    ) { }

    public async create(todoName: string, todoDescription: string) {
        const id = Guid.create().toString()
        await this.todoRepository.save({ id, name: todoName, description: todoDescription })
        return await this.todoRepository.findOne({ where: { id } })
    }
    public async getAll(){
        try {
            const listData = await this.todoRepository.find()
            if(!(listData && listData.length)){
                console.log("not found");   
            }
            return listData;
            
        } catch (error) {
            console.log("error",error);
            throw new BadRequestException("TODO_ NOT_FOUND")
        }
    }

    public async GetTodoById(id:string){
       const todo = await this.todoRepository.findOne({where: { id } })
      return todo
       
    }
    public async delete(id:string){
        const todo = await this.todoRepository.findOne({where: { id } })
        if(!todo){
            throw new BadRequestException("TODO_NOT_FOUND")
        }
        await this.todoRepository.delete(todo.id);
        return { message: 'Todo Deleted' };

    }
    public async updateTodo(id:string,payload:UpdateTodoDto){
        const todo = await this.todoRepository.findOne({where: { id } })
        if(!todo){
            throw new BadRequestException();

        }
        else{
            const updateTodo = await this.todoRepository.save({

                id,
                name: payload.name, 
                description: payload.description 
            }
            )
            return updateTodo
        }
    }
}   

