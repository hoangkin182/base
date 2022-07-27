import { Injectable } from "@nestjs/common";

@Injectable()
export class TodoService{
    public async getAll(){
        console.log("hllecs");
        return {message: "hello"}
    }

    public createTodo(id:string,payload:any){
        console.log("create todo");
        
    }

    public  updateTodo(id:string,payload:any){
        console.log("create todo");
    }


    public GetTodoById(id){
        console.log("create todo");
    }


    public delete(id){
        console.log("create todo");
    }
}