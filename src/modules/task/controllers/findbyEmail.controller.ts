import type { Request, Response } from "express";
import findByEmailTaskUsecase from "../usecase/findByEmail.usecase.ts";


export default class findByEmail{
    private usecase: findByEmailTaskUsecase;
    constructor(usecase: findByEmailTaskUsecase){
        this.usecase = usecase;
    }

   async handle(req:Request,res:Response){
        const {Email} = req.params;
        if(Email){ 
        const userFound = await this.usecase.execute(Email);
        return res.status(200).send(userFound);
         }
         return res.status(400).send();
    }
}