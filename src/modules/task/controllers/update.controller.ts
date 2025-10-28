import type { Request, Response } from "express";
import UpdateTaskUseCase from "../usecase/update.usecase.ts";
import Task from "../domain/tasks.entity.ts";


export default class Update{
    private usecase: UpdateTaskUseCase;
    constructor(usecase: UpdateTaskUseCase){
        this.usecase = usecase;
    }

   async handle(req:Request,res:Response){
        const {id} = req.params;
        const data:Partial<Task> = req.body;

        if(id){ 
        const userFound = await this.usecase.execute(id,data);
        return res.status(200);
         }
         return res.status(400).send();
    }
}