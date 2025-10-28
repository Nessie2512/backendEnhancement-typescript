import type { Request, Response } from "express";
import findByEmailUsecase from "../usecase/findByEmail.usecase.ts";

export default class findByEmail{
    private usecase: findByEmailUsecase;
    constructor(usecase: findByEmailUsecase){
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