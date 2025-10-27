import { Request, Response } from "express";
import CreateTaskUseCase from "../usecase/create.usecase.ts";
import { TasksProps } from "../domain/tasks.entity.ts";


export default class CreateTask{
    private usecase: CreateTaskUseCase;
    constructor(usecase: CreateTaskUseCase){
        this.usecase = usecase;
    }
    handle(req:Request,res:Response){
        const data:TasksProps = req.body;
        this.usecase.execute(data);
        res.status(201).send();
    }
}