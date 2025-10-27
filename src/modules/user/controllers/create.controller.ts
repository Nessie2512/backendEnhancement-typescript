import { Request, Response } from "express";
import { UserProps } from "../domain/entity/user.entity.ts";
import CreateUserUseCase from "../usecase/create.usecase.ts";

export default class CreateUser{
    private usecase: CreateUserUseCase;
    constructor(usecase: CreateUserUseCase){
        this.usecase = usecase;
    }
    handle(req:Request,res:Response){
        const data:UserProps = req.body;
        this.usecase.execute(data);
        res.status(201).send();
    }
}