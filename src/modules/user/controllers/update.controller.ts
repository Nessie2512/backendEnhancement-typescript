import type { Request, Response } from "express";
import UpdateUserUseCase from "../usecase/update.usecase.ts";
import User from "../domain/entity/user.entity.ts";

export default class Update{
    private usecase: UpdateUserUseCase;
    constructor(usecase: UpdateUserUseCase){
        this.usecase = usecase;
    }

   async handle(req:Request,res:Response){
        const {id} = req.params;
        const data:Partial<User> = req.body;

        if(id){ 
        const userFound = await this.usecase.execute(id,data);
        return res.status(200);
         }
         return res.status(400).send();
    }
}